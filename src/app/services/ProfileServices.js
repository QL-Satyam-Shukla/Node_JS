const User = require("../models/user");
const UserProfile = require("../models/UserProfile");

exports.getUserByID = async id => {
  return await User.findOne({
    where:{id:id},
      include:{
          model:UserProfile,
          as:'profile'
      }
  });
};
