const db = require("../config/database");
const dataModels = require("../model/data");

const getHome = async (req, res) => {
  try {
    const [data] = await dataModels.getAllData();
    res.render("Index", { data });
  } catch (error) {
    res.json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const addFeedback = async (req, res) => {
  const { rating, nama, email, phone, feedback } = await req.body;
  const sql = "INSERT INTO data(rating, name, email, phone, message) VALUES (?, ?, ?,?,?)";
  const values = [rating, nama, email, phone, feedback];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("Gagal menyimpan data ke database: " + err.message);
      return res.redirect("/home");
    }
    alert("Data berhasil disimpan ke database");
    res.redirect("/");
  });
};

module.exports = { getHome, addFeedback };
