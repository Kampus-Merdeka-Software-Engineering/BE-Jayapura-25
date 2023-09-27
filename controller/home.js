const dataModels = require("../model/data");

const getHome = async (req, res) => {
  const [data] = await dataModels.getAllData();
  // res.json({
  //   message: "nice",
  //   data: data,
  // });
  res.render("Index", { data: data });
};

const addFeedback = (req, res) => {
  res.json({
    message: "Create New Feedback Succes",
  });
};

module.exports = { getHome, addFeedback };
