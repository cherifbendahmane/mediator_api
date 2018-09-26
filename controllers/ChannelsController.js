//------------------------------------------- IMPORTS

const ChannelsTypes	= require('./../models').channels_types;
const ClientsChannels = require('./../models').clients_channels;
const ClientsChannelsTypes = require('./../models').clients_channels_types;
const channelsService = require("../services/ChannelsService"); 


//------------------------------------------- BDD connect

var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

//-------------------------------------------  CREATE

const createChannelsTypes = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(channelsService.createChannelsTypes(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new channel type.'}, 201);

}

const createClientsChannels = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(channelsService.createClientsChannels(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new Channel.'}, 201);

}

const createClientsChannelsTypes = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(channelsService.createClientsChannelsTypes(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new Clients Channel Type.'}, 201);

}


//-------------------------------------------  READ

const getAllChannelsTypes = async function(req, res){
	
	ChannelsTypes.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}

const getAllClientsChannels = async function(req, res){
	
	ClientsChannels.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}

const getAllClientsChannelsTypes = async function(req, res){
	
	ClientsChannelsTypes.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}


const getChannelsTypes = async function(req, res){
	
	ChannelsTypes.find({
		
		where : {
			id: req.params.id
		}	
	}).then(function(todo){	
		if(todo){
			
			res.send(todo);
		}		
	});	
}

const getClientsChannels = async function(req, res){
	
	ClientsChannels.find({
		
		where : {
			client: req.params.id
		}	
	}).then(function(todo){	
		if(todo){
			
			res.send(todo);
		}		
	});	
}

const getClientsChannelsTypes = async function(req, res){
	
	ClientsChannelsTypes.find({
		
		where : {
			channel: req.params.id
		}	
	}).then(function(todo){	
		if(todo){
			
			res.send(todo);
		}		
	});	
}


//-------------------------------------------  UPDATE

const updateChannelsTypes = async function(req, res){
	
	ChannelsTypes.find({
		
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
      });
	
}


const updateClientsChannels = async function(req, res){
	
	ClientsChannels.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				client: req.body.client,
				channel: req.body.channel
			
			}).then(function(todo) {
					res.end();	
          });
        }
      });
	
}


const updateClientsChannelsTypes = async function(req, res){
	
	ClientsChannelsTypes.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				channel: req.body.channel,
				type: req.body.type
			
			}).then(function(todo) {
					res.end();	
          });
        }
      });
	
}


//-------------------------------------------  DELETE

const removeChannelsTypes = async function(req, res){  

	ChannelsTypes.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
		});

}

const removeClientsChannels = async function(req, res){  

	ClientsChannels.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeClientsChannelsTypes = async function(req, res){  

	ClientsChannelsTypes.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){
				res.end();	
		});

}

//-------------------------------------------  MODULE EXPORTS

module.exports.createChannelsTypes = createChannelsTypes;
module.exports.createClientsChannels = createClientsChannels;
module.exports.createClientsChannelsTypes = createClientsChannelsTypes;

module.exports.getAllChannelsTypes = getAllChannelsTypes;
module.exports.getAllClientsChannels = getAllClientsChannels;
module.exports.getAllClientsChannelsTypes = getAllClientsChannelsTypes;

module.exports.getChannelsTypes = getChannelsTypes;
module.exports.getClientsChannels = getClientsChannels;
module.exports.getClientsChannelsTypes = getClientsChannelsTypes;

module.exports.updateChannelsTypes = updateChannelsTypes;
module.exports.updateClientsChannels = updateClientsChannels;
module.exports.updateClientsChannelsTypes = updateClientsChannelsTypes;

module.exports.removeChannelsTypes = removeChannelsTypes;
module.exports.removeClientsChannels = removeClientsChannels;
module.exports.removeClientsChannelsTypes = removeClientsChannelsTypes;
