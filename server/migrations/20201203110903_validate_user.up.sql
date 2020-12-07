ALTER TABLE `api`.`users` ADD `validate_token` VARCHAR(255) DEFAULT NULL;
ALTER TABLE `api`.`users` ADD `is_validated` TINYINT(1) DEFAULT "0";