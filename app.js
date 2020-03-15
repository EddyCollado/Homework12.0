const inquierer = require("inquierer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Crimson22!",
    database: "employee_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    startScreen();
});

function startScreen() {

}