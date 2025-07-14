const responder = require("../../utils/reponder");
const ProfileServices = require("../services/ProfileServices");
const ProfileResponse = require("../resources/ProfileResponse");

exports.profileDetails = async (request, response, next) => {
  console.log("Request in profile", request.user.id);
  console.log("Request in profile", request.user.role);
  try {
    const user = await ProfileServices.getUserByID(request.user.id);
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
