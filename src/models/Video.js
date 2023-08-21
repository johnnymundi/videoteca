const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  // _id is not really necessary because it is automatically created when saved in Mongo, but it is just for reference
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Video", VideoSchema);
