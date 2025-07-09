const responder = require("../../utils/reponder");
const AuthServices = require("../services/AuthServices");
const LoginResponse=require('../resources/LoginResponse');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async(request, response) => {
  console.log("Inside Login.........")

  const { email, password } = request.body;
  try {
    const user = await AuthServices.getUserByEmail(email);
    console.log(user)
    if (!user) {
      return responder(response, false, "USER_NOT_FOUND", {}, 400);
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    console.log(passwordMatched)
    if (!passwordMatched) {
      responder(response, false, INVALID_CRED, {}, 400);
    }
    const token = jwt.sign(
      { id: user.id, name: user.role,name:user.name },
      process.env.JWT_SECRET
    );
    return responder(
      response,
      true,
      "LOGIN_SUCCESS",
      await new LoginResponse({ user, token }).exec()
    );
  } catch (err) {
    return responder(response, false, "USER_NOT_FOUND", {}, 400);
  }
};