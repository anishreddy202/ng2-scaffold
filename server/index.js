'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/environment');
var express = require('express');
var app = express();

require('./config/express')(app);
require('./routes')(app);

var server = app.listen(config.port, function(){
 	var port = server.address().port;
 	console.log('\nExpress server listening on port ' + port + ', in ' + process.env.NODE_ENV + ' mode')
})
server.on('error', function(e){
	if(e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + process.env.NODE_ENV + 'mode')
	} else {
		process.exit(1);
	}
})

module.exports = server;



