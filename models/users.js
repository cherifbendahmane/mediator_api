'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('users', {
        username		: 	DataTypes.STRING,
        password		: 	DataTypes.STRING,
		salt			:	DataTypes.STRING,
        account_type	:	DataTypes.INTEGER,
		token 			:	DataTypes.STRING,
		active			:	DataTypes.BOOLEAN,
    },
    { indexes: [ { unique: true, fields: [ 'username' ] } ] });

    return Model;
};