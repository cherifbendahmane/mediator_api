'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('clients_channels_types', {
        channel       : 	DataTypes.INTEGER,
        type       : 	DataTypes.INTEGER,
    });

    return Model;
};