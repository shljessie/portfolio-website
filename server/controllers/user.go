package controllers

import (
	"net/http"
	"os"
	"strconv"

	"cochlear.ai/music-swapper/model"
	"cochlear.ai/music-swapper/mysql"
	"cochlear.ai/music-swapper/utils"
	"github.com/gofiber/fiber/v2"
	"github.com/goware/emailx"
	"github.com/jinzhu/copier"
	"golang.org/x/crypto/bcrypt"
)

// UserController struct providing user controllers
type UserController struct{}

// Get one user
func (u UserController) Get(c *fiber.Ctx) error {

	// Get user making the request from comtext
	currentUser := c.Locals("user").(model.User)

	var user model.User
	var userClear model.UserClear

	if c.Params("id") == "" {
		return c.Status(utils.Errors["MissingParam"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["MissingParam"].Message,
		})
	}

	id, _ := strconv.Atoi(c.Params("id"))

	// User can only get his account. Only admin can access all users
	if uint(id) != currentUser.ID && !utils.HasPermission(currentUser.Permission, "admin") {
		return c.Status(utils.Errors["NoPermission"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NoPermission"].Message,
		})
	}

	result := mysql.DB.Where("id = ?", c.Params("id")).First(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	}

	// Copy user to userClear to not show encrypted password
	copier.Copy(&userClear, &user)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"data":   userClear,
	})
}

// List all the users
func (u UserController) List(c *fiber.Ctx) error {

	// Get user making the request from comtext
	currentUser := c.Locals("user").(model.User)

	var users []model.User

	if !utils.HasPermission(currentUser.Permission, "admin") {
		return c.Status(utils.Errors["NoPermission"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NoPermission"].Message,
		})
	}

	result := mysql.DB.Find(&users)

	if result.Error != nil {
		return c.Status(utils.Errors["DatabaseError"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["DatabaseError"].Message,
		})
	}

	// Init empty return result
	usersClear := make([]model.UserAdmin, 0, len(users))

	// Copy all retrived users to clearUsers to hide passwords
	for _, user := range users {
		u := model.UserAdmin{}

		copier.Copy(&u, &user)

		usersClear = append(usersClear, u)
	}

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"data":   usersClear,
	})
}

// Create user and encrypt his password
func (u UserController) Create(c *fiber.Ctx) error {

	var user model.User
	var userClear model.UserClear

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	err := emailx.Validate(user.Email)
	if err != nil {
		return c.Status(utils.Errors["EmailFormat"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["EmailFormat"].Message,
		})
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(utils.Errors["ServerError"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["ServerError"].Message,
		})
	}

	// Set users's password
	user.Password = string(hashPassword)
	// Validate token for the email
	user.ValidateToken = model.RandStringBytesMaskImprSrcUnsafe(128)
	// Default permission is 2 for user
	user.Permission = 2

	if !model.ValidateUser(user) {
		return c.Status(utils.Errors["MissingField"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["MissingField"].Message,
		})
	}

	result := mysql.DB.Create(&user)

	if result.Error != nil {
		return c.Status(utils.Errors["EmailAlreadyUsed"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["EmailAlreadyUsed"].Message,
			"data":   result.Error,
		})
	}

	// Send validation email
	model.SendValidateEmail(
		user.Email,
		"Click <a href=\""+os.Getenv("BASE_URL")+"/v1/auth/validate?token="+user.ValidateToken+"\">this link</a> to validate you account ",
	)

	// Copy user to userClear to not show encrypted password
	copier.Copy(&userClear, &user)

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"data":   userClear,
	})
}

// ListUpload list all upload records belonging to user
func (u UserController) ListUpload(c *fiber.Ctx) error {

	// Get user making the request from comtext
	currentUser := c.Locals("user").(model.User)

	var uploads []model.Upload

	if c.Params("id") == "" {
		return c.Status(utils.Errors["MissingParam"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["MissingParam"].Message,
		})
	}

	id, _ := strconv.Atoi(c.Params("id"))

	// User can only get his account. Only admin can access all users
	if uint(id) != currentUser.ID && !utils.HasPermission(currentUser.Permission, "admin") {
		return c.Status(utils.Errors["NoPermission"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NoPermission"].Message,
		})
	}

	result := mysql.DB.Where("user_id = ?", currentUser.ID).Order("created_at desc").Find(&uploads)

	if result.Error != nil {
		return c.Status(utils.Errors["NotFound"].Code).JSON(fiber.Map{
			"status": "error",
			"error":  utils.Errors["NotFound"].Message,
		})
	}

	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "ok",
		"data":   uploads,
	})
}
