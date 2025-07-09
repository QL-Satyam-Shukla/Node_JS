const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "posts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

module.exports = Post;
