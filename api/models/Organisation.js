/**
 * Organisation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	adapter: 'mongo',
	attributes: {
		name: {
			type: 'string',
			maxLength: 20,
			required: true
		},
		logo: {
			type: 'string'
		}
	}
};