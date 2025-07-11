const jwt = require("jsonwebtoken");
const responder = require("../../utils/reponder");

module.exports = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("deco",decoded)
    if (!decoded.id) {
      return responder(response, false, "AUTH_ERROR", {}, 400);
    }
    request.user = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    // next(error);
     return responder(response, false, "AUTH_ERROR", {}, 400);
  }
};
