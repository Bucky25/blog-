const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema ({
    title: {
        type: String, 
        required: true
    },
    subheader: {
        type: String, 
        required: true
    },
    imageLink: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    }

  },
  { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}}

)

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
