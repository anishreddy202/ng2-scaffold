'use strict';

var path = require('path');

module.exports = function (app) {
  const BASE_URL='/ui/api';

  app.use(BASE_URL + '/home', require('./api/home'));

  app.route(BASE_URL).get((req, res) => {
		var pkg = require("../package.json");
		var os = require('os');
    res.json({
      name: pkg.name,
      version: pkg.version,
      hostname: os.hostname()
    });
  });

   // All other routes should redirect to the index.html
  app.route('/').get(function(req, res) {
      console.log(req.url);
      res.sendFile(path.resolve('client' + '/index.html'));
  });
};
