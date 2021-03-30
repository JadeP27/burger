var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bootcamp2020",
  database: "burgers_db"
});

connection.connect(function(err, connect) {
  if (err) {
    console.error("error connecting: ");
    connect.end()
  }
});

module.exports = connection;