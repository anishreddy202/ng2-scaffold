'use strict';

module.exports = class {
	constructor(args) {
		if (!args) { args = {}; }
		this.success = args.success  || false;
		this.message = args.message || '';
		this.data = null;
	}
}
