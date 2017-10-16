'use strict';

const http = require('http');
const url = require('url');
const router = require('./router.js');

//running the line below runs all the funcitons in note-router.js which is directed to the corresponding  routes.blah function in router.js which then populates the routes stuff which we then use the url and pathname in routeHandler to call the right method 
require('../notes/note-router.js');

const server = module.exports = http.createServer(router.route);
