package mysql

import (
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB is the exported database connection
var DB *gorm.DB

// Init database connection and bind it on the exported DB global
func Init() {

	connectionURL := os.Getenv("SQL_USER") +
		":" +
		os.Getenv("SQL_PASS") +
		"@tcp(" +
		os.Getenv("SQL_HOST") +
		":" +
		os.Getenv("SQL_PORT") +
		")/" +
		os.Getenv("SQL_DATABASE") +
		"?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(connectionURL), &gorm.Config{})

	if err != nil {
		fmt.Println("Error when connection to db")
	} else {
		fmt.Println("Connected to db")
		DB = db
	}

}
