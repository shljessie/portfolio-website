package utils

import (
	"log"

	"github.com/joho/godotenv"
)

// ConfigInit initialise env based on .env file
func ConfigInit() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
