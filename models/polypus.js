'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('Polypus', {
        nom       : 	DataTypes.STRING,
        prenom    : 	DataTypes.STRING,
        email     :     DataTypes.STRING,
        service   :     DataTypes.STRING,
        pays      :     DataTypes.STRING,
        type      :     DataTypes.STRING,
    },
    { indexes: [ { unique: true, fields: [ 'nom','prenom','email' ] } ] });

    return Model;
};