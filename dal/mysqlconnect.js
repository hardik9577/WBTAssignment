const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hardik",
  database: "tflstore",
  port: "3306",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("DataBase is connected");
  }
});

module.exports = connection;
