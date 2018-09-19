'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Users', {
        username       : 	DataTypes.STRING,
        password       : 	DataTypes.STRING,
        account_type   :    DataTypes.INTEGER,
    },
    { indexes: [ { unique: true, fields: [ 'username' ] } ] });

    return Model;
};