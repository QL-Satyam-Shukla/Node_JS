const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class BlogImage extends Model {}

BlogImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "BlogImage",
    tableName: "blog_images",
    timestamps: true,
    createdAt: "uploaded_at",
    updatedAt: false,
  }
);

module.exports = BlogImage;
