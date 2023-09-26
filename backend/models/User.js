const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	state: {
		type: String,
		required: true,
	},
	email:{
		type: String,
		required: true,
	},
	primary: {
		type: Number,
		required: true,
		//unique: true,
	},
	upper_primary: {
		type: Number,
		required: true,
	},
	secondary: {
		type: Number,
		required: true,
		maxLength: 20,
	},
});

module.exports = mongoose.model("User", userSchema);
