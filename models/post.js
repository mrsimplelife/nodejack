const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");
class Post extends Model {}
Post.init(
  {
    content: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: "User",
    tableName: "users",
    paranoid: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);
module.exports = Post;
