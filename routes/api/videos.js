const express = require("express");
const router = express.Router();
const autherize = require("../../middleware/autherize");

const Video = require("../../models/Video");

// =================GET ALL================= //

// @route       GET api/videos
// @desc        get all videos
// @access      public

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find()
      .sort({ _id: -1 })
      .limit(3);
    res.status(200).json({
      data: videos,
      success: true,
      count: videos.length,
      msg: "All videos fetched successfully!"
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Bulk video fetch operation failed" });
  }
});

// ==================POST=================== //

// @route   POST api/blogs **
// @desc    Create Blog **
// @access  Private **

router.post("/", async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.status(201).json({
      success: true,
      data: newVideo,
      msg: "Video successfully added!"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Posting new video operation failed, this video might already exist!"
    });
  }
});

// ================DELETE================== //

//@route    DELETE api/items
//@desc     Delete Item
//@access   Private

router.delete("/:id", async (req, res) => {
  try {
    const deleteVideo = await Video.findByIdAndDelete(req.params.id);

    if (!deleteVideo) {
      return req.status(400).json({
        success: false,
        msg: "Could not find video in the data base!"
      });
    }
    res.status(200).json({
      success: true,
      data: deleteVideo,
      msg: "Video successully deleted"
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Deleting video operation failed!" });
  }
});

// ================ EXPORT ================= //

module.exports = router;
