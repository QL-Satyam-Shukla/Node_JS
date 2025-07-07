const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING(50),
      defaultValue: "AUTHER",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName:'users',
    timestamps: false,
  }
);

module.exports=User;

console.log(User === sequelize.models.User);
