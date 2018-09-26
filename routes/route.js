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
router.get(     '/users',              	UsersController.getAllUsers);
router.get(     '/user/:id',            UsersController.getUser);
router.put(     '/user/:id',          	UsersController.updateUser);
router.delete(  '/user/:id',          	UsersController.removeUser);



module.exports = router;