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
    FOREIGN KEY (department_id) REFERENCES department(id);
    PRIMARY KEY (id);
)

CREATE TABLE employee (
    id INT AUTO_INCREMENT;
    first_name VARCHAR(20);
    last_name VARCHAR(20);
    FOREIGN KEY (role_id) REFERENCES role(id);
    FOREIGN KEY (manager_id) REFERENCES role(department_id)
    PRIMARY KEY (id)
)

SELECT * FROM company_db