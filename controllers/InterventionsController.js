//------------------------------------------- IMPORTS

const InterventionsStatus	= require('./../models').interventions_status;
const InterventionsTypes = require('./../models').interventions_status;
const Interventions = require('./../models').interventions_status;
const interventionsService = require("../services/InterventionsService"); 


//------------------------------------------- BDD connect

var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

//-------------------------------------------  CREATE

const createInterventionsStatus = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(interventionsService.createChannelsTypes(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new interventions status.'}, 201);

}

const createInterventionsTypes = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(interventionsService.createClientsChannels(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new interventions type.'}, 201);

}

const createInterventions = async function(req, res){

	let err, user;
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;   
    [err, user] = await to(interventionsService.createClientsChannelsTypes(body));
    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'Successfully created new intervention.'}, 201);

}


//-------------------------------------------  READ

const getAllInterventionsStatus = async function(req, res){
	
	InterventionsStatus.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}

const getAllInterventionsTypes = async function(req, res){
	
	InterventionsTypes.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}

const getAllInterventions = async function(req, res){
	
	Interventions.findAll({
		
	}).then(function(todo){
		
		if(todo){
			
			res.send(todo);
		}
	});
}


const getInterventionsStatus = async function(req, res){
	
	InterventionsStatus.find({
		
		where : {
			id: req.params.id
		}	
	}).then(function(todo){	
		if(todo){
			
			res.send(todo);
		}		
	});	
}

const getInterventionsTypes = async function(req, res){
	
	InterventionsTypes.find({
		
		where : {
			id: req.params.id
		}	
	}).then(function(todo){	
		if(todo){
			
			res.send(todo);
		}		
	});	
}

const getInterventions = async function(req, res){
	
	Interventions.find({
		
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

const updateInterventionsStatus = async function(req, res){
	
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


const updateInterventionsTypes = async function(req, res){
	
	InterventionsTypes.find({
		
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


const updateInterventions = async function(req, res){
	
	Interventions.find({
		
        where:{
            id: req.params.id
        }
		
    }).then(function(todo) {
		
        if(todo){
			
			todo.updateAttributes({
			  
				client       	: req.body.client,
				speaker       	: req.body.speaker,
				type   			: req.body.type,
				date       		: req.body.date,
				description     : req.body.description,
			    status   		: req.body.status
				
			}).then(function(todo) {
					res.end();	
          });
        }
      });
	
}


//-------------------------------------------  DELETE

const removeInterventionsStatus = async function(req, res){  

	InterventionsStatus.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeInterventionsTypes = async function(req, res){  

	InterventionsTypes.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

const removeInterventions = async function(req, res){  

	ClientsChannelsTypes.destroy({
		
        where:{
            id: req.params.id
        }
		}).then(function(todo){  
			res.end();	
		});

}

//-------------------------------------------  MODULE EXPORTS

module.exports.createInterventionsStatus = createInterventionsStatus;
module.exports.createInterventionsTypes = createInterventionsTypes;
module.exports.createInterventions = createInterventions;

module.exports.getAllInterventionsStatus = getAllInterventionsStatus;
module.exports.getAllInterventionsTypes = getAllInterventionsTypes;
module.exports.getAllInterventions = getAllInterventions;

module.exports.getInterventionsStatus = getInterventionsStatus;
module.exports.getInterventionsTypes = getInterventionsTypes;
module.exports.getInterventions = getInterventions;

module.exports.updateInterventionsStatus= updateInterventionsStatus;
module.exports.updateInterventionsTypes = updateInterventionsTypes;
module.exports.updateInterventions = updateInterventions;

module.exports.removeInterventionsStatus = removeInterventionsStatus;
module.exports.removeInterventionsTypes = removeInterventionsTypes;
module.exports.removeInterventions = removeInterventions;
