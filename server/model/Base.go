package model

import (
	"time"

	"gorm.io/gorm"
)

// Base struct same use as gorm.Model nut customized
type Base struct {
	ID        uint           `copier:"must" gorm:"primaryKey" json:"id"`
	CreatedAt time.Time      `json:"-"`
	UpdatedAt time.Time      `json:"-"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}
