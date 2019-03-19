const mongoose = require('mongoose');
const BlogPostSchema = mongoose.Schema(
{
	title: String,
	theme: String,
	content: String,
	comment: Array
}, {timestamps: true});

mongoose.model('BlogPost', BlogPostSchema);