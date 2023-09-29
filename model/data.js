const dbPool = require("../config/database");
const getAllData = () => {
  const query = "SELECT * FROM data";
  return dbPool.execute(query);
};

const addFeedback = (body) => {
  const query = `INSERT INTO data (rating, name, email, phone, message) VALUES('${body.rating}','${body.name}','${body.email}','${body.phone}','${body.message}')`;

  return dbPool.execute(query);
};
module.exports = {
  getAllData,
  addFeedback,
};
