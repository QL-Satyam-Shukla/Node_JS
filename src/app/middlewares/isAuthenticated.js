const jwt = require("jsonwebtoken");
const responder = require("../../utils/reponder");

module.exports = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("deco",decoded)
    if (!decoded) {
      return responder(response, false, "AUTH_ERROR", {}, 400);
    }
    request.user = {
      id: decoded?.id,
      role:decoded?.role
    };
    next();
  } catch (error) {
    // next(error);
     return responder(response, false, "AUTH_ERROR", {}, 400);
  }
};
