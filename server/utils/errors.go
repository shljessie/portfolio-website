package utils

import "net/http"

// Error binding of http.Code and custom error message
type Error struct {
	Code    int
	Message string
}

// Errors map
var Errors = map[string]Error{
	"MissingField": {
		Code:    http.StatusBadRequest,
		Message: "Missing field",
	},
	"MissingParam": {
		Code:    http.StatusBadRequest,
		Message: "Missing url parameter",
	},
	"DatabaseError": {
		Code:    http.StatusInternalServerError,
		Message: "Database error",
	},
	"NoAccount": {
		Code:    http.StatusNotFound,
		Message: "No account found for this email",
	},
	"NotFound": {
		Code:    http.StatusNotFound,
		Message: "Record not found",
	},
	"WrongPassword": {
		Code:    http.StatusUnauthorized,
		Message: "Password does not match",
	},
	"NoAuth": {
		Code:    http.StatusUnauthorized,
		Message: "Not authentified",
	},
	"ServerError": {
		Code:    http.StatusInternalServerError,
		Message: "Don't know what happened ¯\\_(ツ)_/¯",
	},
	"EmailAlreadyUsed": {
		Code:    http.StatusConflict,
		Message: "This email is already in use",
	},
	"EmailFormat": {
		Code:    http.StatusUnprocessableEntity,
		Message: "Wrong email format",
	},
	"NoPermission": {
		Code:    http.StatusForbidden,
		Message: "The user cannot access the ressource",
	},
	"AlreadyValidated": {
		Code:    http.StatusConflict,
		Message: "User already validated",
	},
}
