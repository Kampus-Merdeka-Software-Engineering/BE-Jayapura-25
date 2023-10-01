const dbPool = require("../config/database");
const getAllData = () => {
  const query = "SELECT * FROM data";
  return dbPool.execute(query);
};

module.exports = {
  getAllData,
};
