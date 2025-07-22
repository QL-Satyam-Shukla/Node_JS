const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Topic extends Model {}

Topic.init(
  {
    topic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    topic_category_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Topic",
    tableName: "topic",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Topic;
