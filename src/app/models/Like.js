const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    modelName: "Like",
    tableName: "likes",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ["blog_id", "user_id"],
      },
    ],
  }
);

module.exports = Like;
