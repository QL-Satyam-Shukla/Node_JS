const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const Blog = require("../models/Blog");
class BlogImage extends Model {}

BlogImage.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    blog_id: { type: DataTypes.STRING, allowNull: false },
    image_url: {
      type: DataTypes.JSON,
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
  },

  (Blog.associate = (models) => {
    Blog.belongsTo(models.Blog, {
      foreignKey: "blog_id",
    });
  })
);

module.exports = BlogImage;
