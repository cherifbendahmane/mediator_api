'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('clients_profile', {
        user       : 	DataTypes.INTEGER,
        company       : 	DataTypes.STRING,
        date_sign   :    DataTypes.DATE,
		picture   :    DataTypes.STRING,
    },
    { indexes: [ { unique: true, fields: [ 'user' ] } ] });

    return Model;
};