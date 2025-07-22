const responder = require("../../utils/reponder");
const BlogServices = require("../services/BlogServices");
const BlogImagesServices = require("../services/BlogImagesServices");
const BlogResponse = require("../resources/BlogResponse");
const { route } = require("../routes/api");

exports.generateBlog = async (request, response) => {
  try {
    const { title, content, image_url, summary, tags, read_time, category,topic_id } =
      request.body;
    const {id} = request.user;
    const createdBlog = await BlogServices.createNewBlog(
      title,
      content,
      image_url,
      summary,
      tags,
      read_time,
      category,
      id,
      topic_id
    );
    const imagedUploaded = await BlogImagesServices.uploadBlogImages(
      (blog_id = createdBlog.id),
      request.body.image_url
    );
    if (!createdBlog && !imagedUploaded) {
      return responder(response, false, "BLOG_NOT_CREATED", {}, 409);
    }
    return responder(response, true, "BLOG_CREATED", {
      createdBlog,
      imagedUploaded,
    });
  } catch (err) {
    console.log(err);
    return responder(response, false, "INV_TOKEN", {}, 400);
  }
};

exports.getAllBlogs = async (request, response, next) => {
  try {
    const allblog = await BlogServices.getAllBlogs();
    console.log("allblog", allblog);
    return responder(response, false, "BLOG_FETCHED", allblog);
  } catch (err) {
    console.log("getAllBlogs",err)
    return responder(response, false, "FALIURE", {}, 400);
  }
};

exports.getBlogByUser = async (request, response, next) => {
  try {
    const { id } = request.user;
    const allblog = await BlogServices.getBlogsByUser(id);
    console.log("allblog", allblog);
    return responder(response, false, "BLOG_FETCHED", allblog);
  } catch (err) {
    console.log(err);
    return responder(response, false, "FALIURE", {}, 400);
  }
};

exports.publishBlog = async (request, response, next) => {
  try {
    const isFound = await BlogServices.getBlogByID(request.params.blogId);
    if (!isFound) {
      return responder(response, false, "BLOG_NOT_FOUND", {});
    }
    if (isFound?.is_published) {
      return responder(response, false, "BLOG_NOT_FOUND", {});
    }
    const isUpdated = await BlogServices.publishBlog(isFound);
    if (!isUpdated) {
      return responder(response, false, "PUBLISH_ERROR", {});
    }
    return responder(response, false, "BLOG_PUBLISH", {});
  } catch (err) {
    console.log(err);
  }
};
