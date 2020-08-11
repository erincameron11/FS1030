// ONLY FOR REFERENCE NOTHING TO DO WITH APP
var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "nodeclient",
  password: "123456"
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // you can run a query by using below mycon.query()
  mycon.query("CREATE DATABASE testdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});