const express = require('express');

const router = express.Router();

const UsersController = require('./../controllers/UsersController');
const ChannelsController = require('./../controllers/ChannelsController');
const InterventionsController = require('./../controllers/InterventionsController');

const passport = require('passport');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"Success response", message:"Mediator_API", data:{"version_number":"v0.0.1"}})
});

router.post(    '/account-type',            UsersController.createAccountTypes);                                              
router.get(     '/account-types',           UsersController.getAllAccountTypes);
router.get(     '/account-type/:id',        UsersController.getAccountTypes);
router.put(     '/account-type/:id',        UsersController.updateAccountTypes);
router.delete(  '/account-type/:id',        UsersController.removeAccountTypes);

router.post(    '/user',              		UsersController.createUser);                                              
router.get(     '/users',              		UsersController.getAllUsers);
router.get(     '/user/:id',            	UsersController.getUser);
router.put(     '/user/:id',          		UsersController.updateUser);
router.delete(  '/user/:id',          		UsersController.removeUser);

router.post(    '/client-profile',          UsersController.createClientsProfile);                                              
router.get(     '/clients-profiles',        UsersController.getAllClients);
router.get(     '/client-profile/:id',      UsersController.getClient);
router.put(     '/client-profile/:id',      UsersController.updateClient);
router.delete(  '/client-profile/:id',      UsersController.removeClient);

router.post(    '/speaker-profile',         UsersController.createSpeakersProfile);                                              
router.get(     '/speakers-profiles',       UsersController.getAllSpeakers);
router.get(     '/speaker-profile/:id',     UsersController.getSpeaker);
router.put(     '/speaker-profile/:id',     UsersController.updateSpeaker);
router.delete(  '/speaker-profile/:id',     UsersController.removeSpeaker);

router.post(    '/channel-type',         	ChannelsController.createChannelsTypes);                                              
router.get(     '/channel-types',        	ChannelsController.getAllChannelsTypes);
router.get(     '/channel-type/:id',     	ChannelsController.getChannelsTypes);
router.put(     '/channel-type/:id',     	ChannelsController.updateChannelsTypes);
router.delete(  '/channel-type/:id',     	ChannelsController.removeChannelsTypes);

router.post(    '/client-channel',         	ChannelsController.createClientsChannels);                                              
router.get(     '/clients-channels',        ChannelsController.getAllClientsChannels);
router.get(     '/client-channel/:id',     	ChannelsController.getClientsChannels);
router.put(     '/client-channel/:id',     	ChannelsController.updateClientsChannels);
router.delete(  '/client-channel/:id',     	ChannelsController.removeClientsChannels);

router.post(    '/client-channel-type',     ChannelsController.createClientsChannelsTypes);                                              
router.get(     '/clients-channels-types',  ChannelsController.getAllClientsChannelsTypes);
router.get(     '/client-channel-type/:id', ChannelsController.getClientsChannelsTypes);
router.put(     '/client-channel-type/:id', ChannelsController.updateClientsChannelsTypes);
router.delete(  '/client-channel-type/:id', ChannelsController.removeClientsChannelsTypes);

router.post(    '/intervention-status',     InterventionsController.createInterventionsStatus);                                              
router.get(     '/interventions-status',    InterventionsController.getAllInterventionsStatus);
router.get(     '/intervention-status/:id', InterventionsController.getInterventionsStatus);
router.put(     '/intervention-status/:id', InterventionsController.updateInterventionsStatus);
router.delete(  '/intervention-status/:id', InterventionsController.removeInterventionsStatus);

router.post(    '/intervention-type',     	InterventionsController.createInterventionsTypes);                                              
router.get(     '/interventions-types',   	InterventionsController.getAllInterventionsTypes);
router.get(     '/intervention-type/:id', 	InterventionsController.getInterventionsTypes);
router.put(     '/intervention-type/:id', 	InterventionsController.updateInterventionsTypes);
router.delete(  '/intervention-type/:id', 	InterventionsController.removeInterventionsTypes);

router.post(    '/intervention',     	InterventionsController.createInterventions);                                              
router.get(     '/interventions',   	InterventionsController.getAllInterventions);
router.get(     '/intervention/:id', 	InterventionsController.getInterventions);
router.put(     '/intervention/:id', 	InterventionsController.updateInterventions);
router.delete(  '/intervention/:id', 	InterventionsController.removeInterventions);


module.exports = router;