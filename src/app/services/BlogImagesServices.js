const BlogImages =require("../models/BlogImages");

exports.uploadBlogImages = async (blog_id,image_url) => {
  return await BlogImages.create({blog_id,image_url});
};



