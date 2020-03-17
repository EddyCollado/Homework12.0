INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Accounting");
INSERT INTO department (name) VALUES ("Manager");


INSERT INTO manager (manager_name) VALUES ("Shane Urie");
INSERT INTO manager (manager_name) VALUES ("Matthew Brown");
INSERT INTO manager (manager_name) VALUES ("Austin Sarwar");
INSERT INTO manager (manager_name) VALUES ("Ellie Martinez");
INSERT INTO manager (manager_name) VALUES ("Ashton Brookes");


INSERT INTO role (title, salary, department_id) VALUES ("manager", 95000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("engineer", 75000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("human resources", 55000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("salesman", 50000.00, 4);
INSERT INTO role (title, salary, department_id) VALUES ("accounting", 48000.00, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Michael", "Spencer", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Adam", "Smith", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Roxie", "Stewart", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Jeff", "Brandt", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Alexis", "Licari", 5, 5);

