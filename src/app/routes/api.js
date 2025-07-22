const router = require("express").Router();

const validations=require("../middlewares/validations");
const AuthController = require("../controllers/AuthController");
const ProfileController = require("../controllers/ProfileController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isAuther=require("../middlewares/isAuther");
const UserController = require("../controllers/UserController");
const BlogController=require("../controllers/BlogController");
const TopicController=require("../controllers/TopicController");

const Logger=require("../middlewares/Logger");


//User
router.post("/login",Logger,validations.loginRules(),validations.validate,AuthController.login);
router.get("/profile", isAuthenticated,Logger,ProfileController.profileDetails);
router.post("/registraction", UserController.RegisterUser);
router.put("/updateuser",isAuthenticated,validations.userUpdateRules(),validations.validate,UserController.UpdateUser)
router.delete("/deleteuser",isAuthenticated,UserController.DeleteUser)
router.put("/changepassword",isAuthenticated,UserController.ChangePassword);


//topic
router.post('/createtopic',Logger,isAuthenticated,isAuther,TopicController.createTopic);
router.get('/getalltopics',Logger,isAuthenticated,isAuther,TopicController.getAllTopic);
router.get('/gettopic/:topic_id',Logger,isAuthenticated,isAuther,TopicController.getTopic);
router.delete('/deletetopic/:topic_id',Logger,isAuthenticated,isAuther,TopicController.deleteTopic);
router.put('/updatetopic/:topic_id',Logger,isAuthenticated,isAuther,TopicController.updateTopic);


//Blog
router.post("/generateblog",isAuthenticated,isAuther,validations.blogCreationRules(),validations.validate,Logger,BlogController.generateBlog)
router.get("/getallblogs",isAuthenticated,Logger,BlogController.getAllBlogs);
router.get("/userblogs",isAuthenticated,isAuther,Logger,BlogController.getBlogByUser);
router.post("/publishblog/:blogId",isAuthenticated,isAuther,Logger,BlogController.publishBlog);
//delete blog
//update blog








module.exports = router;


