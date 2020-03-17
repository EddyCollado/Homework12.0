const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Crimson22!",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    startScreen();
});

function startScreen() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "Add department",
                "Add role",
                "Add manager",
                "Add employee",
                "View managers",
                "View departments",
                "View roles",
                "View employees",
                "Update employee role",
                "Delete Employee",
                "Delete Role",
                "Delete Department",
                "Delete Manager",
                "Quit"
            ],
            message: "What would you like to do?",
            name: "action"
        }).then(function (answer) {
            console.log("You entered: " + answer.action);

            switch (answer.action) {
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Add manager":
                    addManager();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "View managers":
                    viewManagers();
                    break;
                case "View departments":
                    viewDepartments();
                    break;
                case "View roles":
                    viewRoles();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
                case "Delete manager":
                    deleteManager();
                    break;
                case "Delete employee":
                    deleteEmployee();
                    break;
                case "Delete role":
                    deleteRole();
                    break;
                case "Delete department":
                    deleteDepartment();
                    break;
                default:
                    quit();
            }
        });
}

function addDepartment() {
    inquirer
        .prompt({
            type: "input",
            message: "Enter name of department:",
            name: "deptName"
        }).then(function (answer) {
            connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function (err, res) {
                if (err) throw err;
                console.table(res)
                console.log("successfully added!");
                startScreen();
            })
        });
}

function addRole() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter name of role:",
                name: "roleName"
            },
            {
                type: "input",
                message: "Enter salary of role:",
                name: "salaryTotal"
            },
            {
                type: "input",
                message: "Enter the department ID number:",
                name: "deptID"
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO role (title,salary, department_id) VALUES (?,?,?)", [answer.roleName, answer.salaryTotal, answer.deptID], function (err, res) {
                if (err) throw err;
                console.table(res);
                console.log("successfully added!");
                startScreen();
            });
        });
}

function addManager() {
    inquirer
        .prompt([{
            type: "input",
            message: "Enter manager name:",
            name: "managerName"
        }]).then(function (answer) {
            connection.query("INSERT INTO manager (manager_name) VALUES (?)", [answer.managerName], function (err, res) {
                if (err) throw err;
                console.table(res);
                console.log("added successfully!");
                startScreen();
            });
        });

}

function addEmployee() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter employee's role ID number:",
                name: "roleID"
            },
            {
                type: "input",
                message: "Enter first name of employee:",
                name: "firstName"
            },
            {
                type: "input",
                message: "Enter last name of employee:",
                name: "lastName"
            },
            {
                type: "input",
                message: "Enter the employees manager ID number:",
                name: "managerID"
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
                if (err) throw err;
                console.table(res);
                console.log("added successfully!");
                startScreen();
            });
        });
}


function quit() {
    connection.end();
    process.exit();
};