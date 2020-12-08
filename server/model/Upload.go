package model

// Upload type
type Upload struct {
	Base
	Key       string `json:"key"`
	Name      string `json:"name"`
	Extension string `json:"extension"`
	Size      int64  `json:"size"`
	URI       string `json:"uri"`
	UserID    int    `json:"-"`
}
