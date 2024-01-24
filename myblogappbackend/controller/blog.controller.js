// blogController.js
const asyncHandler = require("express-async-handler");
const blogService = require("../services/blog.services");

exports.findBlogPage = asyncHandler(async (req, res) => {
  try {
    const blog = await blogService.findBlogPage();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

exports.postBlogPage = asyncHandler(async (req, res) => {
  const data = {
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    details: req.body.details,
  };

  try {
    const createdBlog = await blogService.createBlogPage(data);
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});
