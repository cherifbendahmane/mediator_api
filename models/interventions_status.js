'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('interventions_status', {
        name       : 	DataTypes.STRING,
    },
    { indexes: [ { unique: true, fields: [ 'name' ] } ] });

    return Model;
};