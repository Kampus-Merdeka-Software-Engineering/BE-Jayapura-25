const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const sequelize = require("sequelize");

// Using Express Framework
const app = express();
const router = express.Router();

// Using Req Body & JSON Res
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS

app.use(cors());

// Using Static Routing
app.use(express.static(__dirname + "/static"));
app.use("/", router);

// Routing
// Routing Get Homepage
router.get("/", (req, res, next) => {
  // Ganti Link GitHub Pages
  res.redirect("https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-25/index.html");
});

// Routing Get Data Feedback
router.get("/testimoni", function (req, res, next) {
  db.data
    .findAll()
    .then(function (data) {
      res.json({
        data: data,
      });
    })
    .catch(function (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Terjadi kesalahan saat menarik data.",
      });
    });
});

//Routing POST Homepage
router.post("/home", (req, res, next) => {
  if (req.body.rating == "" || req.body.nama == "" || req.body.email == "" || req.body.phone == "" || req.body.message == "") {
    res.status(400).json({
      message: "EMPTY FIELD",
    });
    return;
  }
  db.data
    .create({
      rating: req.body.rating,
      nama: req.body.nama,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    })
    .then(function (data) {
      res.redirect("https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-25/index.html");
    })
    .catch(function (err) {
      res.status(500).json({
        message: err,
      });
    });
});

// Running Server
const port = 4000;
app.listen(port, function () {
  db.conn
    .authenticate()
    .then(function () {
      console.log("Database Connected");
    })
    .catch(function (err) {
      console.log("Database Failed Connected :", err);
    });
  console.log("Server Succesfully Running At Port :", port);
});
