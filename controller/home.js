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
  const { body } = req;
  try {
    await dataModels.addFeedback(body);
    res.json({
      message: "Create New Feedback Succes",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getHome, addFeedback };
