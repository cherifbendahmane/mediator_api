const Users 			= require('./../models').Users;
const UsersProfile		= require('./../models').UsersProfile;
const validator     = require('validator');


const createUser = async function(userInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    Users.create(userInfo);
}
const createUserProfile = async function(userProfileInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';
    UsersProfile.create(userProfileInfo);
}

module.exports.createUser = createUser;
module.exports.createUserProfile = createUserProfile;