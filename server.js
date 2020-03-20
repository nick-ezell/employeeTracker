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

function department() {
  let options = ["Update", "Create"];
  let choice = inquirer.prompt([
    {
      type: "list",
      name: "confirm",
      message:
        "Would you like to edit an existing department or create a new one?",
      choices: options
    }
  ]);
  switch (choice.confirm) {
    case options[0]:
      connection.query("SELECT * FROM department", function(err, result) {
        let tableArr = [];
        for (let row of result) {
          tableArr.push(result[row]);
        }
        let chosenDept = inquirer.prompt([
          {
            type: "list",
            name: "nameChange",
            message: "Which department would you like to update?",
            choices: tableArr
          },
          {
            type: "list",
            name: "update",
            message: "What would you like to update?",
            choices: ["name"]
          },
          {
            type: "input",
            name: "newName",
            message: "Please enter a new value for the selected column."
          }
        ]);
        let query =
          `SELECT * FROM department WHERE ${chosenDept.update} = ${chosenDept.nameChange}` +
          `UPDATE department SET ${chosenDept.update} = ${chosenDept.newName}`;
        connection.query(query, function(err, result) {
          connection.end;
        });
        if (err) {
          throw err;
        }
        connection.end;
      });
      break;
    case options[1]:
      break;
  }
}

function role() {
  let options = ["Update", "Create"];
  let choice = inquirer.prompt([
    {
      type: "list",
      name: "confirm",
      message: "Would you like to edit an existing role or create a new one?",
      choices: options
    }
  ]);
  switch (choice.confirm) {
    case options[0]:
      break;
    case options[1]:
      break;
  }
}

function employee() {
  let options = ["Update", "Create"];
  let choice = inquirer.prompt([
    {
      type: "list",
      name: "confirm",
      message:
        "Would you like to edit an existing employee or create a new one?",
      choices: options
    }
  ]);
  switch (choice.confirm) {
    case options[0]:
      break;
    case options[1]:
      break;
  }
}

// function update(props) {}

// function create(props) {
//   connection.query(`INSERT INTO ${props}`)
// }
