package controllers

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
	"strings"

	"cochlear.ai/music-wrapper/middlewares"
	"cochlear.ai/music-wrapper/model"
	"cochlear.ai/music-wrapper/mysql"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	tusd "github.com/tus/tusd/pkg/handler"
	"github.com/tus/tusd/pkg/s3store"
)

// File controller
type File struct{}

// HandleUpload set headers for cors and authentificate the request
func (f File) HandleUpload(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if origin := r.Header.Get("Origin"); origin != "" {
			header := w.Header()
			header.Set("Access-Control-Allow-Origin", origin)

			if r.Method == "OPTIONS" {
				// Preflight request
				header.Add("Access-Control-Allow-Methods", "POST, GET, HEAD, PATCH, DELETE, OPTIONS")
				header.Add("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Upload-Length, Upload-Offset, Tus-Resumable, Upload-Metadata")
				header.Set("Access-Control-Max-Age", "86400")
			} else {
				// Actual request
				header.Add("Access-Control-Expose-Headers", "Upload-Offset, Location, Upload-Length, Tus-Version, Tus-Resumable, Tus-Max-Size, Tus-Extension, Upload-Metadata")
			}

			// Delete Origin to disable tusd CORS,
			// because we already set all CORS headers needed.
			r.Header.Del("Origin")
		}

		if r.Method == "OPTIONS" {
			next.ServeHTTP(w, r)
		} else {
			authorization := r.Header.Get("Authorization")

			var extractedBearer []string
			if authorization != "" {
				extractedBearer = strings.Split(authorization, "Bearer ")
			}

			if len(extractedBearer) != 2 {
				w.WriteHeader(http.StatusUnauthorized)
				return
			} else if extractedBearer[1] == "" {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			var user model.User

			result := mysql.DB.Where("token = ?", extractedBearer[1]).First(&user)

			if result.Error != nil {
				w.WriteHeader(http.StatusUnauthorized)
				return
			} else if !user.IsValidated {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			token, err := middlewares.JWTAuthService().ValidateToken(extractedBearer[1])

			if token.Valid {
				// Forward user_id to next handler to create the file
				r.Header.Set("user_id", strconv.FormatUint(uint64(user.ID), 10))
				_ = token.Claims.(jwt.MapClaims)
				next.ServeHTTP(w, r)
			} else {
				fmt.Println(err)
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}
	})
}

// UploadService serves tusd and upload file videos to s3
func (f File) UploadService() *tusd.Handler {
	// Configure s3 bucket
	s3Config := &aws.Config{
		Region:           aws.String(os.Getenv("AWS_REGION")),
		Credentials:      credentials.NewStaticCredentials(os.Getenv("AWS_ACCESS_KEY_ID"), os.Getenv("AWS_SECRET_ACCESS_KEY"), ""),
		DisableSSL:       aws.Bool(true),
		S3ForcePathStyle: aws.Bool(true),
	}

	// Create a new session
	s3Store := s3store.New(os.Getenv("AWS_BUCKET_NAME"), s3.New(session.Must(session.NewSession()), s3Config))

	// Create Tusd composer and bind it with s3
	composer := tusd.NewStoreComposer()
	s3Store.UseIn(composer)

	// Tusd handler config
	handler, err := tusd.NewHandler(tusd.Config{
		BasePath:                os.Getenv("BASE_FILE_PATH"),
		StoreComposer:           composer,
		NotifyCompleteUploads:   true,
		NotifyTerminatedUploads: false,
		NotifyUploadProgress:    true,
		NotifyCreatedUploads:    false,
		// Prefinished hook save file data in mysql once it's uploaded
		PreFinishResponseCallback: func(hook tusd.HookEvent) error {

			var upload model.Upload

			upload.Key = hook.Upload.Storage["Key"]
			upload.Name = strings.Split(hook.Upload.MetaData["filename"], ".")[0]
			upload.Extension = strings.Split(hook.Upload.MetaData["filename"], ".")[1]
			upload.Size = hook.Upload.Size
			upload.URI = hook.HTTPRequest.URI
			upload.UserID, _ = strconv.Atoi(hook.HTTPRequest.Header.Get("User_id"))

			mysql.DB.Create(&upload)

			return nil
		},
	})

	if err != nil {
		panic(fmt.Errorf("Unable to create handler: %s", err))
	}

	go func() {
		for {
			event := <-handler.UploadProgress
			fmt.Printf("Upload %s progress\n", event.Upload.ID)
		}
	}()

	go func() {
		for {
			event := <-handler.CompleteUploads
			fmt.Printf("Upload %s finished\n", event.Upload.ID)
		}
	}()

	return handler
}

func (f File) GetFile(c *fiber.Ctx) error {

	return nil
}
