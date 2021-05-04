const express = require('express'); //import express

const router  = express.Router(); 

const carController = require('../controllers/carController'); 

router.post('/car', carController.newCar); 

module.exports = router; 