'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('clients_channels', {
        client       : 	DataTypes.STRING,
        channel_name       : 	DataTypes.STRING,
    },
    { indexes: [ { unique: true, fields: [ 'channel_name' ] } ] });

    return Model;
};