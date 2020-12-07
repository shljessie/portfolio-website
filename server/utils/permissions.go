package utils

// Permissions map
var Permissions = map[string]int{
	"admin": 1,
	"user":  2,
}

// HasPermission check permission level of the user.
// If the user has the valid permission return true else false.
func HasPermission(checkinPermission int, permissionLevel string) bool {
	if checkinPermission <= Permissions[permissionLevel] {
		return true
	}
	return false
}
