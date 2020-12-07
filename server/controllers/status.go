package controllers

import (
	"github.com/gofiber/fiber/v2"
)

// Status exported struct
type Status struct{}

// Status return api status
func (h Status) Status(c *fiber.Ctx) error {
	return c.Status(200).JSON(fiber.Map{
		"status": "ok",
	})
}
