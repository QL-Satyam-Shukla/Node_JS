const responder = require("../../utils/reponder");
module.exports = (request, response, next) => {
    const { role } = request.user;
    console.log("Role middleware",role)
    if (role!= "author") {
        return responder(response, false, "NOT_RIGTHS", {}, 409);
    }
    next();
}