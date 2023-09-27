const express = require("express");
const app = express();
const mysql = require("mysql2");
const homeRoutes = require("./routes/home.js");
const checkUpRoutes = require("./routes/check-up.js");
const aboutUsRoutes = require("./routes/about-us.js");

//Database Connection
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_mhet",
});

//Database Check Connection
app.use("/", (req, res) => {
  dbPool.execute("SELECT * FROM data", (err, rows) => {
    if (err) {
      res.json({
        message: "connection failed",
      });
    }
    res.json({
      message: "connection success",
      data: rows,
    });
  });
});

//JSON Rquest & Body Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Using EJS
app.set("view engine", "ejs");

// Define Assets
app.use(express.static(__dirname + "/public"));

// Routing
app.use("/home", homeRoutes);
app.use("/checkup", checkUpRoutes);
app.use("/aboutus", aboutUsRoutes);

// app.use("/", (req, res) => {
//   res.render("Index");
// });

// app.post("/tambah", (req, res) => {
//   let hasil = req.body.angka1 + req.body.angka2;
//   res.json({
//     hasil: hasil,
//   });
// });

// app.post("/kurang", (req, res) => {
//   let hasil = req.body.angka1 - req.body.angka2;
//   res.json({
//     hasil: hasil,
//   });
// });

// app.post("/kali", (req, res) => {
//   let hasil = req.body.angka1 * req.body.angka2;
//   res.json({
//     hasil: hasil,
//   });
// });

// app.post("/bagi", (req, res) => {
//   let hasil = req.body.angka1 / req.body.angka2;
//   res.json({
//     hasil: hasil,
//   });
// });

app.listen(4000, () => {
  console.log("Server Succesfully Running at port 4000");
});
