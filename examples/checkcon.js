// This page checks your database connection!

var mysql = require('mysql');

var mycon = mysql.createConnection({
  host: "localhost",
  user: "nodeclient",
  password: "123456",
  port: 3600
});

mycon.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});