const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");
class Hashtag extends Model {}
Hashtag.init(
  {
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: "User",
    tableName: "users",
    paranoid: false,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
module.exports = Hashtag;
