//Database Connection
const mysql = require("mysql2");
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_mhet",
});

module.exports = dbPool.promise();
