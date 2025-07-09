const User = require("../models/user");

exports.getUserByEmail = async email => {
  return await User.findOne({ where: { email: email}});
};
