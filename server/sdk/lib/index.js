'use strict';

const Service = require('./services');
const pkg = require('../../../package.json');
const async = require('async');


let UserService = function () {
  let self = this;
  let service = null;

  self.setup = (config) => {
    service = new Service.User(config);
  };

  self.info = (params, done) => {
    service.info(params, (err, result) => done(err, result));
  };
  
  return self;
};

module.exports = {
  version: pkg.version,
  Services: {
    User: new UserService()
  }
}