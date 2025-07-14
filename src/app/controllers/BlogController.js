const responder = require("../../utils/reponder");
const BlogServices = require("../services/BlogServices");
const BlogImagesServices = require("../services/BlogImagesServices");

exports.generateBlog = async (request, response) => {
  try {
    const { title, content, image_url, summary, tags, read_time, category } =
      request.body;
    const { id, role } = request.user;
    if (!role == "author") {
      return responder(response, false, "NOT_RIGTHS", {}, 409);
    }
    const createdBlog = await BlogServices.createNewBlog(
      title,
      content,
      image_url,
      summary,
      tags,
      read_time,
      category,
      id
    );
    const imagedUploaded = await BlogImagesServices.uploadBlogImages(
      (blog_id = createdBlog.id),
      image_url
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

exports.getAllBlogs = async(request, response, next) => {
  try {
    const allblog = await BlogServices.getAllBlogs();
    return responder(response, true, "BLOG_CREATED", allblog);
  } catch (err) {
    console.log(err);
  }
};
