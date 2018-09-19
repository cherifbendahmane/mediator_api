'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('UsersProfile', {
		user   		   :    DataTypes.INTEGER,
        firstname      : 	DataTypes.STRING,
        lastname       : 	DataTypes.STRING,
		birthdate      : 	DataTypes.DATE,
		company        : 	DataTypes.STRING,
		      
    },
    { indexes: [ { unique: true, fields: [ 'user' ] } ] });

    return Model;
};