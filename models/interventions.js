'use strict';
// const bcrypt 			= require('bcrypt');
// const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('interventions', {
        client       : 	DataTypes.INTEGER,
        speaker       : 	DataTypes.INTEGER,
        type   :    DataTypes.INTEGER,
		date       : 	DataTypes.DATE,
        description       : 	DataTypes.STRING,
        status   :    DataTypes.INTEGER,
    },
    { indexes: [ { unique: true, fields: [ 'client', 'speaker', 'date' ] } ] });

    return Model;
};