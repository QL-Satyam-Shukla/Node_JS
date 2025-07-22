const responder = require("../../utils/reponder");
module.exports = (request, response, next) => {
    const { role } = request.user;
    if (role!= "author") {
        return responder(response, false, "NO_RIGTHS", {}, 409);
    }
    next();
}