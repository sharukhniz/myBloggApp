const asyncHandler = require("express-async-handler");
const blogPage = require("../model/blog.model");

exports.findBlogPage = async () => {
  try {
    return await blogPage.find();
  } catch (error) {
    console.error("Error Finding Blog:", error);
    throw new Error("Internal server error Find blog");
  }
};

exports.createBlogPage = async (data) => {
  try {
    return await blogPage.create(data);
  } catch (error) {
    console.error("Error Creating Blog:", error);
    throw new Error("Internal server error creating blog");
  }
};
