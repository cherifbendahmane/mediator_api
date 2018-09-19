//-- IMPORTS

const Users		= require('./../models').Users;
const UsersProfile		= require('./../models').UsersProfile;
const usersService = require("../services/UsersService"); 

//-------------------------------------------

var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

const createUser = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createUser(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new user.'}, 201);

}

const createUserProfile = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;    
    [err, user] = await to(usersService.createUserProfile(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new user.'}, 201);

}

//-------------------------------------------

const getAllUsers = async function(req, res){
	
	Users.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
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
		
	});
	
	
}

const getAllUsersProfile = async function(req, res){
	
	UsersProfile.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		
	});
	
	
}

const getUserProfile = async function(req, res){
	
	UsersProfile.find({
		
		where : {
			id: req.params.id
		}
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
		
	});
	
	
}

//-------------------------------------------

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
				account_type: req.body.account_type
			
			}).then(function(todo) {			  			
          });
        }
      });
	
}

const updateUserProfile = async function(req, res){
	
	UsersProfile.find({
		
        where:{
            user: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				birthdate: req.body.birthdate,
				company: req.body.company
			
			}).then(function(todo) {			  			
          });
        }
      });
	
}

//-------------------------------------------

const removeUser = async function(req, res){  

	Users.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
		});

 
}

const removeUserProfile = async function(req, res){  

	UsersProfile.destroy({
		
        where:{
            user: req.params.id
        }
		}).then(function(todo){
		});

 
}

//-------------------------------------------


module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.removeUser = removeUser;

module.exports.createUserProfile = createUserProfile;
module.exports.getAllUsersProfile = getAllUsersProfile;
module.exports.getUserProfile = getUserProfile;
module.exports.updateUserProfile = updateUserProfile;
module.exports.removeUserProfile = removeUserProfile;

