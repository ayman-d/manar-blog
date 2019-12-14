const express = require("express");
const router = express.Router();
const autherize = require("../../middleware/autherize");

const Link = require("../../models/Link");

// =================GET ALL================= //

// @route       GET api/links
// @desc        get all links
// @access      public

router.get("/", async (req, res) => {
  try {
    const links = await Link.find()
      .sort({ _id: -1 })
      .limit(3);
    res.status(200).json({
      data: links,
      success: true,
      count: links.length,
      msg: "All links fetched successfully!"
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Bulk link fetch operation failed" });
  }
});

// ==================POST=================== //

// @route   POST api/links **
// @desc    Create Link **
// @access  Private **

router.post("/", autherize, async (req, res) => {
  try {
    const newLink = await Link.create(req.body);
    res.status(201).json({
      success: true,
      data: newLink,
      msg: "Link successfully added!"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Posting new link operation failed!"
    });
  }
});

// ================DELETE================== //

//@route    DELETE api/links
//@desc     Delete link
//@access   Private

router.delete("/:id", autherize, async (req, res) => {
  try {
    const deleteLink = await Link.findByIdAndDelete(req.params.id);

    if (!deleteLink) {
      return req.status(400).json({
        success: false,
        msg: "Could not find link in the data base!"
      });
    }
    res.status(200).json({
      success: true,
      data: deleteLink,
      msg: "Link successully deleted"
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Deleting link operation failed!" });
  }
});

// ================ EXPORT ================= //

module.exports = router;
