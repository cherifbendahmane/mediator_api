'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('speakers_profile', {
        user       		: 	DataTypes.INTEGER,
        firstname       : 	DataTypes.STRING,
        lastname   		:   DataTypes.STRING,
		birthdate       : 	DataTypes.DATEONLY,
        date_sign       : 	DataTypes.DATE,
        picture   		:   DataTypes.STRING,
		company   		:   DataTypes.STRING, 
    },
    { indexes: [ { unique: true, fields: [ 'user' ] } ] });

    return Model;
};