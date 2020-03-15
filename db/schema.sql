DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

    CREATE TABLE manager (
        id NOT NULL AUTO_INCREMENT,
        manager_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE employee (
        id INT AUTO_INCREMENT NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE role (
        id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR(255) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE department (
        id INT AUTO_INCREMENT NOT NULL,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

    