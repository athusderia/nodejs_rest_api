CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id) 
);

INSERT INTO employee VALUES 
    (1, 'Joe', 1000),
    (2, 'Doe', 2000),
    (3, 'Henrry', 3000)