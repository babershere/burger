CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burger_name varchar
    (100) NOT NULL,
    devoured TINYINT
    (100) NOT NULL,
    time_eaten timestamp,
    (6) NULL DEFUALT NULL,
    PRIMARY KEY
    (id)
);