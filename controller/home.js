const getHome = (req, res) => {
  res.render("Index");
};

const getDataFeedback = (req, res) => {
  res.json({
    message: "Get Data Feedback Succes",
  });
};

const addFeedback = (req, res) => {
  res.json({
    message: "Create New Feedback Succes",
  });
};

module.exports = { getHome, addFeedback, getDataFeedback };
