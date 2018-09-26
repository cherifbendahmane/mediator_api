//------------------------------------------- IMPORTS

const AccountTypes	= require('./../models').account_types;
const Users = require('./../models').users;
const SpeakersProfile = require('./../models').speakers_profile;
const ClientsProfile = require('./../models').clients_profile;
const usersService = require("../services/UsersService"); 
const Crypto = require('crypto');


//------------------------------------------- BDD connect

var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

//-------------------------------------------  CONNEXION

const connect = async function(req, res){
	
	let password = req.body.password;
	
	Users.find({
		
		where : {
			username: req.body.username
		}
		
	}).then(function(todo){
		
		if(todo){
			
			if (Crypto.pbkdf2Sync(password, todo.salt, 1000, 64, `sha512`).toString(`hex`) === todo.password){
				res.json({status: "ACCEPTED", user : todo});
			}
			else{
				res.json({status : "REFUSED", message : "Invalid password"});
			}
		}
		else{
			res.json({status : "REFUSED", message : "Username does not exists"});
		}
		
	});
	
}

//-------------------------------------------  CREATE

const createAccountTypes = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createAccountTypes(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new account type.'}, 201);

}

const createUser = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createUser(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new user.'}, 201);

}

const createClientsProfile = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createClientsProfile(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new client profile.'}, 201);

}

const createSpeakersProfile = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createSpeakersProfile(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new speaker profile.'}, 201);

}


//-------------------------------------------  READ

const getAllAccountTypes = async function(req, res){
	
	AccountTypes.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
	});
}

const getAllUsers = async function(req, res){
	
	Users.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
	});
}

const getAllClients = async function(req, res){
	
	ClientsProfile.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
	});
}

const getAllSpeakers = async function(req, res){
	
	SpeakersProfile.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}

const getAccountTypes = async function(req, res){
	
	AccountTypes.find({
		
		where : {
			id: req.params.id
		}
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
		
	});
	
	
}

const getUser = async function(req, res){
	
	Users.find({
		
		where : {
			id: req.params.id
		}
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
		
	});
	
	
}

const getClient = async function(req, res){
	
	ClientsProfile.find({
		
		where : {
			user: req.params.id
		}
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
		
	});
	
	
}

const getSpeaker = async function(req, res){
	
	SpeakersProfile.find({
		
		where : {
			user: req.params.id
		}
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		else{
			res.end();
		}
		
	});
	
	
}



//-------------------------------------------  UPDATE

const updateAccountTypes = async function(req, res){
	
	AccountTypes.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				name: req.body.name
			
			}).then(function(todo) {
				res.end();
          });
        }
		else{
			res.end();
		}
      });
	
}

const updateUser = async function(req, res){
	
	Users.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				username: req.body.username,
				password: req.body.password,
				salt: req.body.salt,
				account_type: req.body.account_type
			
			}).then(function(todo) {
				res.end();
          });
        }
		else{
			res.end();
		}
      });
	
}

const updateClient = async function(req, res){
	
	ClientsProfile.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				company     : 	req.body.company,
				date_sign   :   req.body.date_sign,
				picture     :   req.body.picture
			
			}).then(function(todo) {	
				res.end();			
          });
        }
		else{
			res.end();
		}
      });
	
}

const updateSpeaker = async function(req, res){
	
	SpeakersProfile.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				firstname       : 	req.body.firstname ,
				lastname   		:   req.body.lastname ,
				birthdate       : 	req.body.birthdate ,
				date_sign       : 	req.body.date_sign ,
				picture   		:   req.body.picture ,
				company   		:   req.body.company 
			
			}).then(function(todo) {	
				res.end();				
          });
        }
		else{
			res.end();
		}
      });
	
}

//-------------------------------------------  DELETE

const removeAccountTypes = async function(req, res){  

	AccountTypes.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeUser = async function(req, res){  

	Users.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeClient = async function(req, res){  

	ClientsProfile.destroy({
		
        where:{
            user: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeSpeaker = async function(req, res){  

	SpeakersProfile.destroy({
		
        where:{
            user: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}


//-------------------------------------------  MODULE EXPORTS

module.exports.connect = connect;

module.exports.createAccountTypes = createAccountTypes;
module.exports.createUser = createUser;
module.exports.createClientsProfile = createClientsProfile;
module.exports.createSpeakersProfile = createSpeakersProfile;

module.exports.getAllAccountTypes = getAllAccountTypes;
module.exports.getAllUsers = getAllUsers;
module.exports.getAllClients = getAllClients;
module.exports.getAllSpeakers = getAllSpeakers;

module.exports.getAccountTypes = getAccountTypes;
module.exports.getUser = getUser;
module.exports.getClient = getClient;
module.exports.getSpeaker = getSpeaker;

module.exports.updateAccountTypes = updateAccountTypes;
module.exports.updateUser = updateUser;
module.exports.updateClient = updateClient;
module.exports.updateSpeaker = updateSpeaker;

module.exports.removeAccountTypes = removeAccountTypes;
module.exports.removeUser = removeUser;
module.exports.removeClient = removeClient;
module.exports.removeSpeaker = removeSpeaker;

