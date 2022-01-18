// no need to change this file
const knex = require('knex')
const configs = require('../knexfile.js')
//on heroku this will be whatever heroku needs to make this possible
const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[environment])
