package server

import (
	"net/http"
	"os"

	"cochlear.ai/music-swapper/controllers"
	"cochlear.ai/music-swapper/middlewares"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

// NewTusdService host tusd services in a separated server
func NewTusdService(server *http.ServeMux) *http.ServeMux {

	file := new(controllers.File)

	server.Handle(os.Getenv("BASE_FILE_PATH"),
		file.HandleUpload(
			http.StripPrefix(os.Getenv("BASE_FILE_PATH"), file.UploadService()),
		),
	)

	return server
}

// NewRouter is the main router of the app
func NewRouter() *fiber.App {

	app := fiber.New(fiber.Config{
		StrictRouting: true,
	})

	app.Use(logger.New())
	app.Use(recover.New())
	app.Use(cors.New())

	app.Static("/assets", "./static")

	v1 := app.Group("/v1")

	// --- Doc ---
	v1.Get("/documentation", func(c *fiber.Ctx) error {
		return c.Render("./static/doc.html", fiber.Map{})
	})

	// --- Status ---
	status := new(controllers.Status)
	app.Get("/status", status.Status)

	// --- User ---
	user := new(controllers.UserController)
	// ------ Public routes -------
	userGroupPublic := v1.Group("/user")
	userGroupPublic.Post("/", user.Create)
	// ------ Private routes ------
	userGroupPrivate := v1.Group("/user", middlewares.AuthMiddleware())
	userGroupPrivate.Get("/:id", user.Get)
	userGroupPrivate.Get("/:id/upload", user.ListUpload)
	userGroupPrivate.Get("/list", user.List)

	// --- Auth ---
	auth := new(controllers.Auth)
	// ------ Public routes -------
	authGroupPublic := v1.Group("/auth")
	authGroupPublic.Post("/login", auth.Login)
	authGroupPublic.Get("/validate", auth.Validate)
	authGroupPublic.Post("/forgot", auth.Forgot)
	authGroupPublic.Post("/reset", auth.Reset)
	// ------ Private routes -------
	authGroupPrivate := v1.Group("/auth", middlewares.AuthMiddleware())
	authGroupPrivate.Get("/logout", auth.Logout)

	// 404 Handler
	app.Use(func(c *fiber.Ctx) error {
		return c.SendStatus(404)
	})

	return app
}
