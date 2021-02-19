const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

module.exports = db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.User = require("./user");
db.Pser = require("./post");
db.Hashtag = require("./hashtag");
