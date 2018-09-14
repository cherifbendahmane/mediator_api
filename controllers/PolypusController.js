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

}

//-------------------------------------------

const get = async function(req, res){
	
}

//-------------------------------------------

const update = async function(req, res){
	
}

//-------------------------------------------

const remove = async function(req, res){   
 
}

//-------------------------------------------


module.exports.remove = remove;
module.exports.update = update;
module.exports.get = get;
module.exports.create = create;