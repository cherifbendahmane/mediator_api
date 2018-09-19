//-- IMPORTS

//-------------------------------------------


var Sequelize = require('sequelize');
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});



const create = async function(req, res){  

	res.send("Create");

}

//-------------------------------------------

const get = async function(req, res){
	
	res.send("Get");
	
}

//-------------------------------------------

const update = async function(req, res){
	
	res.send("Update");
	
}

//-------------------------------------------

const remove = async function(req, res){  

	res.send("Delete");
 
}

//-------------------------------------------


module.exports.create = create;
module.exports.get = get;
module.exports.update = update;
module.exports.remove = remove;

