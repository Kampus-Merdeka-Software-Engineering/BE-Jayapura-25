const db = require("../config/database");
const dataModels = require("../model/data");

const getHome = async (req, res) => {
  try {
    const [data] = await dataModels.getAllData();
    res.redirect("http://localhost:4000/index.html");
  } catch (error) {
    res.json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const addFeedback = (req, res) => {
  const { rating, nama, email, phone, feedback } = req.body;
  const sql = "INSERT INTO data(rating, name, email, phone, message) VALUES (?, ?, ?,?,?)";
  const values = [rating, nama, email, phone, feedback];

  db.execute(sql, values, (err) => {
    if (err) {
      alert("Gagal menyimpan data ke database: " + err.message);
      res.redirect("http://localhost:4000/home");
    }
    alert("Data berhasil disimpan ke database");
    res.redirect("http://localhost:4000/home");
  });
};

module.exports = { getHome, addFeedback };
