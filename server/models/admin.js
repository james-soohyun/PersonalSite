const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema(
{
	name: String,
	email: String,
	password: String,
	adminStatus: Boolean
}, {timestamps: true});

mongoose.model('Admin', AdminSchema);