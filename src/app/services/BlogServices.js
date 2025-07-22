const Blog = require("../models/Blog");
const BlogImage = require("../models/BlogImages");
const Topic = require("../models/Topic");
const User = require("../models/user");
exports.createNewBlog = async (
  title,
  content,
  image_url,
  summary,
  tags,
  read_time,
  category,
  id,
  topic_id
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
    topic_id,
  });
};

exports.getAllBlogs = async () => {
  return await Blog.findAll({
    include: [
      {
        model: BlogImage,
        as: "Images",
      },
      {
        model: Topic,
        as: "blog",
      },
    ],
  });
};

exports.getBlogsByUser = async (id) => {
  return await Blog.findAll({
    where: { author_id: id },
    include: [
      {
        model: BlogImage,
        as: "Images",
      },
      {
        model: User,
        as: "User",
      },
      {
        model: Topic,
        as: "blog",
      },
    ],
  });
};

exports.getBlogByID = async (blogId) => {
  return await Blog.findByPk(blogId);
};

exports.publishBlog = async (isFound) => {
  const { id } = isFound;
  return await Blog.update(
    { is_published: true },
    {
      where: {
        id: id,
      },
    }
  );
};
