const router = require("express").Router();

const AuthController = require("../controllers/AuthController");
const ProfileController = require("../controllers/ProfileController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const UserController = require("../controllers/UserController");
const BlogController=require("../controllers/BlogController");
const Logger=require("../middlewares/Logger");
const { logger } = require("sequelize/lib/utils/logger");

//User
router.post("/login",Logger,AuthController.login);
router.get("/profile", isAuthenticated,Logger,ProfileController.profileDetails);
router.post("/createuser", UserController.RegisterUser);
router.put("/updateuser",isAuthenticated,UserController.UpdateUser)
router.delete("/deleteuser",isAuthenticated,UserController.DeleteUser)
router.put("/changepassword",isAuthenticated,UserController.ChangePassword);


//Blog
router.post("/generateblog",isAuthenticated,Logger,BlogController.generateBlog)
router.get("/getallblogs",isAuthenticated,Logger,BlogController.getAllBlogs);

module.exports = router;
