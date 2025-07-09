const router = require("express").Router();

const AuthController = require("../controllers/AuthController");
const ProfileController = require("../controllers/ProfileController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const UserController = require("../controllers/UserController");


//User
router.post("/login", AuthController.login);
router.get("/profile", isAuthenticated, ProfileController.profileDetails);
router.post("/createuser", UserController.RegisterUser);
router.put("/updateuser",isAuthenticated,UserController.UpdateUser)
router.delete("/deleteuser",isAuthenticated,UserController.DeleteUser)
router.put("/changepassword",isAuthenticated,UserController.ChangePassword);


module.exports = router;
