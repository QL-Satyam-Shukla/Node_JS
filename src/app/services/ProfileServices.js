const User = require("../models/user");

exports.getUserByID = async id => {
  return await User.findOne({ where: { id: id}});
};
