'use strict';

const Emitter = require('events').EventEmitter;
const util = require('util');
const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const Model = require('../models');

let formatted = bformat({ outputMode: 'short', color: true})
let log = bunyan.createLogger({
  name: 'UserService',
  level: process.env.LOG_LEVEL || 'info',
  stream: formatted,
  serializers: bunyan.stdSerializers
});

const Service = function (configuration, token) {
  Emitter.call(this);
  let self = this;
  let continueWith = null;

  let getInfo = function(args) {

    let response = {
      name: 'IRVUI',
      message: "Irving User Interface Team"
    }
    log.debug('RESPONSE getInfo()', response);

    return self.emit('send-data', response);
  }

  // Create an Okay Result
  let sendData = function (data) {
    let result = {}
    result.success = true;
    result.message = 'Success';
    result.data = data;
    log.trace(result)
    log.trace('SEND SUCCESS');

    if (continueWith) {
      continueWith(null, result);
    }
  };

  // Create a Bad Result
  let sendError = function (error, message) {
    let result = {}
    result.success = false;
    result.message = message;
    result.error = error;
    log.error('SEND ERROR', error);

    if (continueWith) {
      continueWith(null, result);
    }
  };

  /////////////////////////////////////////

  self.info = function (input, done) {
  	continueWith = done;
  	self.emit('get-info', input);
  }
  
  self.on('get-info', getInfo);
  self.on('send-data', sendData);
  self.on('send-error', sendError);

};

util.inherits(Service, Emitter);
module.exports = Service;