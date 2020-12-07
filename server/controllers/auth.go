package controllers

import (
	"net/http"
	"os"
	"time"

	"cochlear.ai/music-wrapper/middlewares"
	"cochlear.ai/music-wrapper/model"
	"cochlear.ai/music-wrapper/mysql"
	"cochlear.ai/music-wrapper/utils"
	"golang.org/x/crypto/bcrypt"

	"github.com/gofiber/fiber/v2"
	"github.com/goware/emailx"
)

// Auth struct providing authentification controllers
type Auth struct{}

// Login checks if the user has an account
// and then check if the password match.
// If the password is valid store a JWT token in user's cookies
// to keep him logged in
func (a Auth) Login(c *fiber.Ctx) error {

	var user model.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	if !model.ValidateUser(user) {
		return c.Status(utils.Errors["MissingField"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["MissingField"].Message,
		})
	}

	pass := user.Password

	// Get user in database by his email
	result := mysql.DB.Where("email = ?", user.Email).First(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["DatabaseError"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["DatabaseError"].Message,
			"data":   result.Error,
		})
		// Check if the user is found in database
	} else if user.Password == "" {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	} else if !user.IsValidated {
		return c.Status(utils.Errors["NoAuth"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NoAuth"].Message,
			"data": fiber.Map{
				"message": "User email is not validated",
			},
		})
	}

	// Compare login password on the user's hash in database
	// If it match err is nil
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(pass))

	if err != nil {
		return c.Status(utils.Errors["WrongPassword"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["WrongPassword"].Message,
		})
	}

	jwtServices := middlewares.JWTAuthService()
	token := jwtServices.GenerateToken(user.Email, true)

	// Save token in DB to identify user's session
	mysql.DB.Model(&user).Update("token", token)

	// Set JWT token on user's cookies
	cookie := &fiber.Cookie{
		Name:     "token",
		Value:    token,
		Path:     "/",
		Domain:   "",
		MaxAge:   86400,
		Expires:  time.Date(0, 0, 1, 0, 0, 0, 0, time.Now().Location()),
		Secure:   true,
		HTTPOnly: true,
		SameSite: "",
	}

	c.Cookie(cookie)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"token":  token,
	})
}

// Logout delete cookie to unlog user
func (a Auth) Logout(c *fiber.Ctx) error {

	// Get user making the request from comtext
	currentUser := c.Locals("user").(model.User)

	// Set empty cookie to override the JWT token
	c.ClearCookie("token")

	mysql.DB.Model(&currentUser).Update("token", nil)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
	})
}

// Validate user email
func (a Auth) Validate(c *fiber.Ctx) error {

	if c.Query("token") == "" {
		return c.Status(utils.Errors["MissingParam"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["MissingParam"].Message,
		})
	}

	var user model.User

	// Get user in database by his email
	result := mysql.DB.Where("validate_token = ?", c.Query("token")).First(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	}

	if user.IsValidated {
		return c.Status(utils.Errors["AlreadyValidated"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["AlreadyValidated"].Message,
		})
	}

	mysql.DB.Model(&user).Update("is_validated", true)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
	})
}

// Forgot password function
func (a Auth) Forgot(c *fiber.Ctx) error {

	var userForgot model.UserForgot
	var user model.User

	if err := c.BodyParser(&userForgot); err != nil {
		return err
	}

	err := emailx.Validate(userForgot.Email)
	if err != nil {
		return c.Status(utils.Errors["EmailFormat"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["EmailFormat"].Message,
		})
	}

	result := mysql.DB.Where("email = ?", userForgot.Email).First(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	}

	// Temporary reset token
	resetToken := model.RandStringBytesMaskImprSrcUnsafe(128)

	// Save the reset token
	mysql.DB.Model(&user).Update("reset_token", resetToken)

	model.SendValidateEmail(
		user.Email,
		"Click <a href=\""+os.Getenv("BASE_URL")+"/reset?token="+resetToken+"\">this link</a> to reset your password ",
	)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"data": fiber.Map{
			"message": "Reset link sent",
		},
	})
}

// Reset password
func (a Auth) Reset(c *fiber.Ctx) error {

	token := c.Query("token")
	var userForgot model.UserForgot
	var user model.User

	if err := c.BodyParser(&userForgot); err != nil {
		return err
	}

	result := mysql.DB.Where("reset_token = ?", token).First(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(userForgot.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(utils.Errors["ServerError"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["ServerError"].Message,
		})
	}

	mysql.DB.Model(&user).Update("password", hashPassword)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
	})
}
