var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bootcamp2020",
  database: "burgers_db"
});

connection.connect(function(err, connect) {
  if (err) {
    console.error("error connecting:" + err.stack);
    connect.end()
  }
});

module.exports = connection;