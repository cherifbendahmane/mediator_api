const InterventionsStatus	= require('./../models').interventions_status;
const InterventionsTypes = require('./../models').interventions_status;
const Interventions = require('./../models').interventions_status;
const validator = require('validator');
const Sequelize = require('sequelize');


const createInterventionsStatus = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    InterventionsStatus.create(data);
}
const createInterventionsTypes = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    InterventionsTypes.create(data);
}
const createInterventions = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    Interventions.create(data);
}


module.exports.createInterventionsStatus = createInterventionsStatus;
module.exports.createInterventionsTypes = createInterventionsTypes;
module.exports.createInterventions = createInterventions;
