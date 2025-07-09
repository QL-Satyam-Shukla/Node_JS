const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

module.exports = Comment;
