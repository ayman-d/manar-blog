const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blog = mongoose.model("blog", BlogSchema);
