'use strict';

const requestParse = require('./request-parse.js');
const response = require('./response.js');
const url = require('url');

const routes = {
  GET: {},
  PUT: {},
  POST: {},
  DELETE: {},
};

const router = module.exports = {};

router.get = (pathaname, callback) => {
  routes.GET[pathaname] = callback;
};

router.post= (pathname, callback) => {
  routes.POST[pathname] = callback;
};

router.delete = (pathname, callback) => {
  routes.DELETE[pathname] = callback;
};

router.put = (pathname, callback) => {
  routes.PUT[pathname] = callback;
};

router.route = (req, res) => {
  req.url = url.parse(req.url);

  let routeHandler = routes[req.method][req.url.pathname];

  if(routeHandler) {
    routeHandler(req,res);
  } else {
    response.sendStatus(res, 400, 'Error! Route doesn\'t exist!');
  }

};