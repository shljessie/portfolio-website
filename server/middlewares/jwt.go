package middlewares

import (
	"fmt"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
)

// JWTService interface
type JWTService interface {
	GenerateToken(email string, isUser bool) string
	ValidateToken(token string) (*jwt.Token, error)
}

type authCustomClaims struct {
	Email string `json:"email"`
	User  bool   `json:"user"`
	jwt.StandardClaims
}

type jwtServices struct {
	secretKey string
	issuer    string
}

// JWTAuthService auth service
func JWTAuthService() JWTService {
	return &jwtServices{
		secretKey: os.Getenv("JWT_SALT"),
		issuer:    os.Getenv("JWT_ISSUER"),
	}
}

func (service *jwtServices) GenerateToken(email string, isUser bool) string {
	claims := &authCustomClaims{
		email,
		isUser,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
			Issuer:    service.issuer,
			IssuedAt:  time.Now().Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	//encoded string
	t, err := token.SignedString([]byte(service.secretKey))
	if err != nil {
		panic(err)
	}
	return t
}

func (service *jwtServices) ValidateToken(encodedToken string) (*jwt.Token, error) {
	return jwt.Parse(encodedToken,
		func(token *jwt.Token) (interface{}, error) {
			if _, isvalid := token.Method.(*jwt.SigningMethodHMAC); !isvalid {
				return nil, fmt.Errorf("Invalid token %w", token.Header["alg"])
			}
			return []byte(service.secretKey), nil
		},
	)
}
