const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Blog extends Model {}

Blog.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    author_id: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING(255), allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    is_published: { type: DataTypes.BOOLEAN, defaultValue: false },
    summary: { type: DataTypes.STRING(500), allowNull: true },
    tags: { type: DataTypes.STRING(255), allowNull: true },
    read_time: { type: DataTypes.INTEGER, defaultValue: 0 },
    category: { type: DataTypes.STRING(100), allowNull: true },
  },
  {
    sequelize,
    modelName: "Blog",
    tableName: "blogs",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Blog.associate = (models) => {
  Blog.belongsTo(models.User, {
    foreignKey: "author_id",
    as:"author",
  });

  Blog.hasMany(models.BlogImage, {
    foreignKey: "blog_id",
    as: "images",
  });
};

module.exports = Blog;
