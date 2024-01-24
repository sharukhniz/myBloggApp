const asyncHandler = require("express-async-handler");

const blogPage = require("../model/blogPage");

exports.findBlogPage = asyncHandler(async (req, res) => {
  try {
    const blog = await blogPage.find();
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error Finding Blog:", error);
    res.status(500).json({
      message: "Internal server error Find blog",
      error: error.message || "Internal Server Error",
    });
  }
});
// GET: find the Blog details End

// POST: post the Blog details
exports.postBlogPage = asyncHandler(async (req, res) => {
  const data = new blogPage({
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    details: req.body.details,
  });

  data
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error Creating Blog:", err);
      res.status(500).json({
        message: "Internal server error creating blog",
        error: err.message || "Internal Server Error",
      });
    });
});
// POST: post  the Blog details
