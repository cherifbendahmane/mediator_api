//------------------------------------------- IMPORTS

const AccountTypes	= require('./../models').account_types;
const Users = require('./../models').users;
const SpeakersProfile = require('./../models').speakers_profile;
const ClientsProfile = require('./../models').clients_profile;
const usersService = require("../services/UsersService"); 


//------------------------------------------- BDD connect

var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

//-------------------------------------------  CREATE

const createUser = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(usersService.createUser(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new user.'}, 201);

}


//-------------------------------------------  READ

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



//-------------------------------------------  UPDATE

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

//-------------------------------------------  DELETE

const removeUser = async function(req, res){  

	Users.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
		});

 
}


//-------------------------------------------  MODULE EXPORTS

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.removeUser = removeUser;

