const mysql = require("mysql");
const inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "company_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startCMS();
});

const startCMS = async () => {
  const choices = ["department", "role", "employee"];
  let choice = await inquirer.prompt([
    {
      type: "list",
      message: "Welcome! Please select a table to work with.",
      name: "table",
      choices: choices
    }
  ]);
  switch (choice.table) {
    case choices[0]:
      department();
      break;
    case choices[1]:
      role();
      break;
    case choices[2]:
      employee();
      break;
  }
};
