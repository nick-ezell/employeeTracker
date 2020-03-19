DROP DATABASE IF EXISTS company_db

CREATE DATABASE company_db
USE company_db

CREATE TABLE department (
    id INT AUTO_INCREMENT;
    name VARCHAR(30) NOT NULL;
    PRIMARY KEY (id)
)
CREATE TABLE role (
    id INT AUTO_INCREMENT;
    title VARCHAR(30) NOT NULL;
    salary DECIMAL(8, 2) NOT NULL;
    department_id INT FOREIGN KEY;
)

CREATE TABLE employee (
    id INT AUTO_INCREMENT;
    first_name VARCHAR(20);
    last_name VARCHAR(20);
    role_id INT NOT NULL;
    manager_id INT FOREIGN KEY;
)

SELECT * FROM company_db