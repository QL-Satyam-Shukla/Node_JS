const Blog = require("../models/Blog");
exports.createNewBlog = async (
  title,
  content,
  image_url,
  summary,
  tags,
  read_time,
  category,
  id
) => {
  return await Blog.create({
    title,
    content,
    image_url,
    summary,
    tags,
    read_time,
    category,
    author_id: id,
  });
};

exports.getAllBlogs = async() => {
   return await Blog.findAll({limit:10});
};
