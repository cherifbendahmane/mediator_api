const AccountTypes	= require('./../models').account_types;
const Users = require('./../models').users;
const SpeakersProfile = require('./../models').speakers_profile;
const ClientsProfile = require('./../models').clients_profile;
const validator = require('validator');
const Sequelize = require('sequelize');


const createAccountTypes = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    AccountTypes.create(data);
}
const createUser = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    Users.create(data);
}
const createClientsProfile = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    ClientsProfile.create(data);
}
const createSpeakersProfile = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    SpeakersProfile.create(data);
}

module.exports.createAccountTypes = createAccountTypes;
module.exports.createUser = createUser;
module.exports.createClientsProfile = createClientsProfile;
module.exports.createSpeakersProfile = createSpeakersProfile;
