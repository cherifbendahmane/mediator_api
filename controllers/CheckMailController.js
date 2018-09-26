//------------------------------------------- IMPORTS


const checkMailService = require("../services/CheckMailService"); 

const Crypto = require('crypto');

const generateToken = async function(req, res){
	
	
	Crypto.randomBytes(48, function(err, buffer) {
		var randomToken =  buffer.toString('hex');
		res.json({token : randomToken});
	});
}

module.exports.generateToken = generateToken;
