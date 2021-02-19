const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");
class User extends Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "local",
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: "User",
    tableName: "users",
    paranoid: true,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
module.exports = User;
