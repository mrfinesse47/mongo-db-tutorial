const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const blogSchema = new Scheema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema); //blog is a singular of the collection name
module.exports = Blog;
