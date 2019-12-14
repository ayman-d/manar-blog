const express = require("express");
const router = express.Router();
const autherize = require("../../middleware/autherize");

const Blog = require("../../models/Blog");

// =================GET ALL================= //

// @route       GET api/blogs
// @desc        get all blogs
// @access      public

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });
    res.status(200).json({
      data: blogs,
      success: true,
      count: blogs.length,
      msg: "All posts fetched successfully!"
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Bulk fetch operation failed" });
  }
});

// ===============GET ONE=================== //

// @route       GET api/blog/:id
// @desc        get single blog
// @access      public

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res
        .status(400)
        .json({ success: false, msg: "Could not find post in the data base!" });
    }

    res.status(200).json({ success: true, data: blog, msg: "Post found!" });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Fetch operation failed!" });
  }
});

// ==================POST=================== //

// @route   POST api/blogs **
// @desc    Create Blog **
// @access  Private **

router.post("/", autherize, async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      data: newBlog,
      msg: "Post successfully added!"
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Posting operation failed!" });
  }
});

// ================DELETE================== //

//@route    DELETE api/items
//@desc     Delete Item
//@access   Private

router.delete("/:id", autherize, async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return req
        .status(400)
        .json({ success: false, msg: "Could not find post in the data base!" });
    }
    res.status(200).json({
      success: true,
      data: deletedBlog,
      msg: "Post successully deleted"
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Delete operation failed!" });
  }
});

// ================PUT================== //

//@route    PUT api/blogs
//@desc     Update blog
//@access   Private

router.put("/:id", autherize, async (req, res) => {
  try {
    const editedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!editedBlog) {
      return res.status(400).json({
        success: false,
        msg: "Could not find post in the data base!"
      });
    }
    res.status(200).json({
      success: true,
      data: editedBlog,
      msg: "Post successfully edited!"
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Edit operation failed!" });
  }
});

// ================ EXPORT ================= //

module.exports = router;
