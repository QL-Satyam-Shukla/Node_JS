const responder = require("../../utils/reponder");
const ProfileServices = require("../services/ProfileServices");
const ProfileResponse = require("../resources/ProfileResponse");

exports.profileDetails = async (request, response, next) => {
  const {id}=request.user;
  try {
    const user = await ProfileServices.getUserByID(id);
    console.log("userprofile", user);
    if (!user) {
      return responder(response, false, "USER_NOT_FOUND", {}, 400);
    }
    return responder(
      response,
      true,
      200,
      await new ProfileResponse(user).exec()
    );
  } catch (err) {
    return responder(response, false, "INV_TOKEN", {}, 400);
  }
};
