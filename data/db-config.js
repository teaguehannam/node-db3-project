//import knex
const knex = require('knex');

//get config
const config = require('../knexfile.js');

// switch between development/production
module.exports = knex(config.development);