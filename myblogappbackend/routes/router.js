const express = require("express");
const router = express.Router();

const controller = require("../controller/blog.controller");
router.get("/blogPage", controller.findBlogPage);
router.post("/blogPage", controller.postBlogPage);

module.exports = router;
