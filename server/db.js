const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "juan",
  password: "juan123",
  database: "task_manager",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

module.exports = connection;