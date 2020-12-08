package model

import (
	"crypto/tls"
	"fmt"
	"math/rand"
	"os"
	"time"
	"unsafe"

	gomail "gopkg.in/mail.v2"
)

// User model
type User struct {
	Base
	Password      string `json:"password"`
	Email         string `json:"email"`
	Permission    int    `json:"permission"`
	Token         string `json:"token"`
	IsValidated   bool   `json:"is_validated"`
	ValidateToken string `json:"validate_token"`
	ResetToken    string `json:"reset_token"`
	Upload        Upload
}

// UserClear struct.
// Used in auth so user password can be kept secret
type UserClear struct {
	Base
	Email string `copier:"must" json:"email"`
}

// UserAdmin is used so the admin can see more infos about users
type UserAdmin struct {
	Base
	Email       string `copier:"must" json:"email"`
	Permission  int    `copier:"must" json:"permission"`
	IsValidated string `copier:"must" json:"is_validated"`
}

// UserForgot struct for reset password flow
type UserForgot struct {
	Email    string `copier:"must" json:"email"`
	Password string `copier:"must" json:"password"`
}

// ValidateUser checks user validity
func ValidateUser(user User) bool {
	if user.Email != "" && user.Password != "" {
		return true
	}
	return false
}

// RandStringBytesMaskImprSrcUnsafe generates random string
func RandStringBytesMaskImprSrcUnsafe(n int) string {

	var src = rand.NewSource(time.Now().UnixNano())
	const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const (
		letterIdxBits = 6                    // 6 bits to represent a letter index
		letterIdxMask = 1<<letterIdxBits - 1 // All 1-bits, as many as letterIdxBits
		letterIdxMax  = 63 / letterIdxBits   // # of letter indices fitting in 63 bits
	)

	b := make([]byte, n)
	// A src.Int63() generates 63 random bits, enough for letterIdxMax characters!
	for i, cache, remain := n-1, src.Int63(), letterIdxMax; i >= 0; {
		if remain == 0 {
			cache, remain = src.Int63(), letterIdxMax
		}
		if idx := int(cache & letterIdxMask); idx < len(letterBytes) {
			b[i] = letterBytes[idx]
			i--
		}
		cache >>= letterIdxBits
		remain--
	}

	return *(*string)(unsafe.Pointer(&b))
}

// SendValidateEmail send email to validate user's account
func SendValidateEmail(email string, content string) {
	m := gomail.NewMessage()

	m.SetHeader("From", "no-reply@cochlear.ai")

	m.SetHeader("To", email)

	m.SetHeader("Subject", "Email validation")

	m.SetBody("text/html", content)

	d := gomail.NewDialer("smtp.gmail.com", 587, os.Getenv("MAIL_USER"), os.Getenv("MAIL_PASSWORD"))

	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	// Now send E-Mail
	if err := d.DialAndSend(m); err != nil {
		fmt.Println(err)
		panic(err)
	}

	return
}
