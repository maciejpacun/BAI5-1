const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookuj",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO `patient`(`ID`, `login`, `password`, `phoneNumber`) VALUES ('','test','12345','610230929')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
