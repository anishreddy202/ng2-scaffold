'use strict';

const Service = require('./services');
const pkg = require('../../../package.json');
const async = require('async');


let HomeService = function () {
  let self = this;
  let service = null;

  self.setup = (config) => {
    service = new Service.Home(config);
  };

  self.info = (params, done) => {
    service.info(params, (err, result) => done(err, result));
  };

  return self;
};

module.exports = {
  version: pkg.version,
  Services: {
    Home: new HomeService()
  }
}