const ChannelsTypes	= require('./../models').channels_types;
const ClientsChannels = require('./../models').clients_channels;
const ClientsChannelsTypes = require('./../models').clients_channels_types;
const validator = require('validator');
const Sequelize = require('sequelize');


const createChannelsTypes = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    ChannelsType.create(data);
}
const createClientsChannels = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    ClientsChannels.create(data);
}
const createClientsChannelsTypes = async function(data){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    ClientsChannelsTypes.create(data);
}


module.exports.createChannelsTypes = createChannelsTypes;
module.exports.createClientsChannels = createClientsChannels;
module.exports.ClientsChannelsTypes = ClientsChannelsTypes;
