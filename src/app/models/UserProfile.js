const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:false
    },
    bio: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    profile_picture_url: {
      type: DataTypes.STRING(300),
      allowNull: false,
      unique: false,
    },
     website: {
       type:DataTypes.STRING(100),
       allowNull:true,
       unique:false,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Noida",
    },
    birthdate:{
        type:DataTypes.DATE,
        allowNull:false,
        unique:true
    }
  },
  {
    sequelize,
    modelName: "UserProfile",
    tableName: "user_profiles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
  
);

module.exports = UserProfile;
