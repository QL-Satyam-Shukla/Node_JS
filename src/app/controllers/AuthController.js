const responder = require("../../utils/reponder");
const AuthServices = require("../services/AuthServices");
const LoginResponse = require("../resources/LoginResponse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (request, response) => {
  console.log("Inside Login.........");

  const { email, password } = request.body;
  try {
    const user = await AuthServices.getUserByEmail(email);
    console.log(user);
    if (!user) {
      return responder(response, false, "USER_NOT_FOUND", {}, 400);
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      responder(response, false, INVALID_CRED, {}, 400);
    }
    const accessToken = jwt.sign({ id: user.id,role:user.role }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );
    const tokens= {accessToken,refreshToken} 
    return responder(
      response,
      true,
      "LOGIN_SUCCESS",
      await new LoginResponse({ user,tokens}).exec()
    );
  } catch (err) {
    return responder(response, false, "USER_NOT_FOUND", {}, 400);
  }
};
