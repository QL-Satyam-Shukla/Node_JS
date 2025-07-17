const User = require("../models/user");
const UserProfile = require("../models/UserProfile");


exports.Register = async (name, email, password, role) => {
  return await User.create({ name, email, password, role });
};

exports.createUserProfile = async (bio, profile_picture_url, website,location,birthdate,user_id) => {
  return await UserProfile.create({bio, profile_picture_url, website,location,birthdate,user_id });
};


exports.GetUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.UpdateUserByEmail = async (name, email, newEmail) => {
  return await User.update(
    { name, email: newEmail },
    {
      where: {
        email,
      },
    }
  );
};

exports.DeleteUserByEmail = async (email) => {
  return await User.destroy({
    where: {
      email: email,
    },
  });
};

exports.UpdatePasswordByEmail = async (email, hashedPassword) => {
  return await User.update(
    { password: hashedPassword },
    {
      where: {
        email,
      },
    }
  );
};
