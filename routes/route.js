const express = require('express');

const router = express.Router();

const UsersController = require('./../controllers/UsersController');


const passport = require('passport');
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"Success response", message:"Polypus_API", data:{"version_number":"v0.0.1"}})
});



router.post(    '/user',              	UsersController.createUser);                                              
router.get(     '/user',              	UsersController.getAllUsers);
router.get(     '/user/:id',            UsersController.getUser);
router.put(     '/user/:id',          	UsersController.updateUser);
router.delete(  '/user/:id',          	UsersController.removeUser);

router.post(    '/user-profile', 	    UsersController.createUserProfile);
router.get(     '/user-profile',    	UsersController.getAllUsersProfile);
router.get(     '/user-profile/:id',    UsersController.getUserProfile);
router.put(     '/user-profile/:id',   	UsersController.updateUserProfile);
router.delete(  '/user-profile/:id',   	UsersController.removeUserProfile);


module.exports = router;