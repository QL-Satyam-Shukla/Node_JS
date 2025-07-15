const { body, validationResult } = require("express-validator");
exports.registrationRules = () => [
  body("name").not().isEmpty().isString(),
  body("email").not().isEmpty().isEmail(),
  body("password").not().isEmpty().isLength({ min: 8 }),
  body("role").not().isEmpty().isIn(["author", "viewer"]),
];

exports.loginRules = () => [
  body("email").not().isEmpty().isEmail(),
  body("password").not().isEmpty().isLength({ min: 8 }),
];

exports.userUpdateRules = () => [
  body("name").not().isEmpty().isString(),
  body("email").not().isEmpty().isEmail(),
  body("newEmail").not().isEmpty().isEmail(),
];

exports.DeleteUserRules = () => [body["email"].not().isEmpty().isEmail()];

exports.changepasswordRules = () => [
  body["email"].not().isEmpty().isEmail(),
  body["password"].not().isEmpty().isString().isLength({ min: 8 }),
];

exports.blogCreationRules = () => [
  body("title").not().isEmpty().isString(),
  body("content").not().isEmpty().isString(),
  [body("image_url").not().isURL().isEmpty().isString().isArray()],
  body("summary").not().isEmpty().isString(),
  body("tags").not().isEmpty().isString(),
  body("read_time").not().isEmpty().isNumeric(),
  body("category").not().isEmpty().isString(),
];

exports.validate = (request, _response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
    }
    next();
  } catch (error) {}
};
