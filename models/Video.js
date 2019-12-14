const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = Video = mongoose.model("video", VideoSchema);
