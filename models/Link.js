const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Link = mongoose.model("link", LinkSchema);
