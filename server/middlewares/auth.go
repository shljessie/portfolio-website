package middlewares

import (
	"fmt"
	"strings"

	"cochlear.ai/music-wrapper/model"
	"cochlear.ai/music-wrapper/mysql"
	"cochlear.ai/music-wrapper/utils"
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// AuthMiddleware run on every private routes
func AuthMiddleware() fiber.Handler {
	return func(c *fiber.Ctx) error {

		// Get cookie
		tokenCookie := c.Cookies("token")

		// Get bearer
		authorization := c.Get("Authorization")
		var extractedBearer []string
		if authorization != "" {
			extractedBearer = strings.Split(authorization, "Bearer ")
		}

		// Check there is either a cookie or a bearer present in the request
		if tokenCookie == "" && (len(extractedBearer) != 2 || extractedBearer[1] == "") {
			return c.Status(utils.Errors["NoAuth"].Code).JSON(fiber.Map{
				"status": "error",
				"error":  utils.Errors["NoAuth"].Message,
			})
		}

		var usedToken string

		// Select setted field for auth
		if len(extractedBearer) > 0 && extractedBearer[1] != "" {
			usedToken = extractedBearer[1]
		} else if tokenCookie != "" {
			usedToken = tokenCookie
		}

		var user model.User

		result := mysql.DB.Where("token = ?", usedToken).First(&user)

		if result.Error != nil {
			return c.Status(utils.Errors["NoAuth"].Code).JSON(fiber.Map{
				"status": "error",
				"error":  utils.Errors["NoAuth"].Message,
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

		// Set user in gin context so it can be retrieved later
		c.Locals("user", user)

		token, err := JWTAuthService().ValidateToken(usedToken)

		if token.Valid {
			claims := token.Claims.(jwt.MapClaims)
			fmt.Println(claims)
			c.Next()
		} else {
			fmt.Println(err)
			return c.Status(utils.Errors["NoAuth"].Code).JSON(fiber.Map{
				"status": "error",
				"error":  utils.Errors["NoAuth"].Message,
			})
		}

		return c.Next()
	}
}
