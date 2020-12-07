CREATE TABLE IF NOT EXISTS `api`.`uploads` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `extension` VARCHAR(255) NOT NULL,
  `uri` VARCHAR(255) NOT NULL,
  `size` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` Datetime NULL,
  `updated_at` Datetime NULL,
  `deleted_at` Datetime NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_upload_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_upload_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `api`.`users` (`id`),
  UNIQUE INDEX `key_UNIQUE` (`key` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;