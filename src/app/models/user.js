const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("author", "viewer"),
      allowNull: false,
      defaultValue: "viewer",
    },
    account_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

module.exports = User;
