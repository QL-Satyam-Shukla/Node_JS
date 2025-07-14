const responder = require("../../utils/reponder");
const UserServices = require("../services/UserServices");
const bcrypt = require("bcrypt");

//Register new user
exports.RegisterUser = async (request, response) => {
  try {
    const { name, email, password, role } = request.body;

    const emailExists = await UserServices.GetUserByEmail(email);
    if (emailExists) {
      return responder(response, false, "EMAIL_EXIS", {}, 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserServices.Register(name, email, hashedPassword, role);

    if (!user) {
      return responder(response, false, "NOT_ADDED", {}, 400);
    }
    return responder(response, true, "USER_ADDED", {}, 200);
  } catch (err) {
    console.error("Register Error:", err);
    return responder(response, false, "FAILURE", {}, 500);
  }
};

//update user
exports.UpdateUser = async (request, response) => {
  try {
    const { name, email, newEmail } = request.body;
    const userFound = await UserServices.GetUserByEmail(email);
    if (!userFound) {
      return responder(response, false, "NOT_EXIS", {}, 400);
    }
    const user = await UserServices.UpdateUserByEmail(name, email, newEmail);
    console.log("user", user);
    if (!user[0] == 1) {
      return responder(response, false, "USER_NOT_UPDATE", {}, 400);
    }
    return responder(response, false, "USER_UPDATE", {}, 400);
  } catch (err) {
    console.log(err);
    return responder(response, false, "FAILURE", {}, 400);
  }
};

exports.DeleteUser = async (request, response) => {
  const { email } = request.body;
  const userFound = await UserServices.GetUserByEmail(email);
  if (!userFound) {
    return responder(response, false, "NOT_EXIS", {}, 400);
  }
  const user = await UserServices.DeleteUserByEmail(email);
  console.log("update", user);
  if (!user) {
    return responder(response, false, "USER_NOT_DELETE", {}, 400);
  }
  return responder(response, false, "USER_DELETE", {}, 400);
};

exports.ChangePassword = async (request, response) => {
  const { email, password } = request.body;
  const userFound = await UserServices.GetUserByEmail(email);
  if (!userFound) {
    return responder(response, false, "NOT_EXIS", {}, 404);
  }
  const chekpassword = await bcrypt.compare(password, userFound.password);
  if (chekpassword) {
    return responder(
      response,
      false,
      "PASS_EXIST",
      { "Password You Entered": password },
      409
    );
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const passwordChanged = await UserServices.UpdatePasswordByEmail(
    email,
    hashedPassword
  );
  if (!passwordChanged[0] == 1) {
    return responder(response, false, "PASS_NOT_CHANGED", {}, 409);
  }
  return responder(response, true, "PASS_CHANGED", {
    name: userFound.name,
    email: userFound.email,
    role: userFound.role,
  });
};
