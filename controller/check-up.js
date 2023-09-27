const getCheckUpPage = (req, res) => {
  res.render("checkUp");
};

const getFormTest = (req, res) => {
  res.json({
    message: "Get Form Test Succes",
  });
};

module.exports = { getCheckUpPage, getFormTest };
