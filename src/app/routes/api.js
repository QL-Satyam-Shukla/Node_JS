const router = require("express").Router();

const validations=require("../middlewares/validations");
const AuthController = require("../controllers/AuthController");
const ProfileController = require("../controllers/ProfileController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isAuther=require("../middlewares/isAuther");
const UserController = require("../controllers/UserController");
const BlogController=require("../controllers/BlogController");
const Logger=require("../middlewares/Logger");


//User
router.post("/login",Logger,validations.loginRules(),validations.validate,AuthController.login);
router.get("/profile", isAuthenticated,Logger,ProfileController.profileDetails);
router.post("/registraction", UserController.RegisterUser);
router.put("/updateuser",isAuthenticated,validations.userUpdateRules(),validations.validate,UserController.UpdateUser)
router.delete("/deleteuser",isAuthenticated,UserController.DeleteUser)
router.put("/changepassword",isAuthenticated,UserController.ChangePassword);


//Blog
router.post("/generateblog",isAuthenticated,isAuther,validations.blogCreationRules(),validations.validate,Logger,BlogController.generateBlog)
router.get("/getallblogs",isAuthenticated,Logger,BlogController.getAllBlogs);

module.exports = router;


