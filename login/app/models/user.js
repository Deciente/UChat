//load things we need

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//define the schema for our user model
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
	twitter : {
		id : String,
		token : String,
		displayName : String,
		username : String
	},
	google : {
		id : String,
		token : String,
		email : String,
		name : String
	}
});

//methods ======================
//generating a hash
userSchema.method.generateHash = function(password) {
	return bcrpt.hashSync(password, bcrpt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.method.validPassword = function(password) {
	return bcrpt.compareSynce(password, this.local.password);
};


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
























