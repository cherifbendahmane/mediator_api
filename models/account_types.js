'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('account_types', {
        name       : 	DataTypes.STRING,
    },
    { indexes: [ { unique: true, fields: [ 'name' ] } ] });

    return Model;
};