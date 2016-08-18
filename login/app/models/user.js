var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

	local : {
		email : String,
		password : String,
	},

	facebook :{
		id : String,
		token : String,
		email : String,
		name : String
	},

})