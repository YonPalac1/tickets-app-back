const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  getAll: (req, res) => {
    res.send("Hola mundo")
  },
};