'use strict';

const express = require('express');
const path = require('path');
const config = require('./environment');

module.exports = function (app) {
	app.use(express.static(path.join(config.root, 'client')));
}