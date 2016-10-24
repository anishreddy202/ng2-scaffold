'use strict';

const express = require('express');
const router = express.Router();
const config = require('../config/environment');
const ThingSpace = require('../sdk').Services.User;

router.get('/', function(req, res){
  let dto =  req.body;
  ThingSpace.setup(config);
  ThingSpace.info(dto, (err, result) => {
    if(err) { return res.status(500).json({message : err}) }

    res.status(200).json(result);
  });
});


module.exports = router;
