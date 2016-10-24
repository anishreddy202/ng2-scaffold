'use strict';

const should = require('chai').Should();
const SDK = require('../lib');

describe('Home Component', () => {
	it('should have a version', () => SDK.version.should.exist);
	it('should have services', () => SDK.Services.should.exist);
	describe('Home Service', () => {
		it('should have a Home Service', () => {
			SDK.Services.Home.should.exist;
		});
		it('should have a setup function', () => {
			SDK.Services.Home.setup.should.be.a('function');
		});
		it('should have a info function', () => {
			SDK.Services.Home.info.should.be.a('function');
		});
	});
});