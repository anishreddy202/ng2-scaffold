'use strict';

const should = require('chai').Should();
const WSO2 = require('../lib');

describe('WSO2 Component', () => {
	it('should have a version', () => WSO2.version.should.exist);
	it('should have services', () => WSO2.Services.should.exist);
	describe('User Service', () => {
		it('should have a User Service', () => {
			WSO2.Services.User.should.exist;
		});
		it('should have a setup function', () => {
			WSO2.Services.User.setup.should.be.a('function');
		});
		it('should have a info function', () => {
			WSO2.Services.User.info.should.be.a('function');
		});
	});
});