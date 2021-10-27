const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const CreativeSchema = new Schema({
  bucketName: String,
  creatives: Array,
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CreativeModel", CreativeSchema);
