const express 			= require('express');
const router 			= express.Router();

const PolypusController 	= require('./../controllers/PolypusController');


const passport      	= require('passport');
const path              = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});



router.post(    '/polypus',              	PolypusController.create);        // C                                              
router.get(     '/polypus',              	PolypusController.get);          // R
router.put(     '/polypus',          		PolypusController.update);      // U
router.delete(  '/polypus/:id',          	PolypusController.remove);     // D


module.exports = router;