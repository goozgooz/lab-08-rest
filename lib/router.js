'use strict';


const response = require('./response.js');
const url = require('url');
const requestParse = require('../lib/request-parse.js');

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

  requestParse(req)
    .then( (req) => {

      let routeHandler = routes[req.method][req.url.pathname];

      if(routeHandler) {
        console.log('running handler');
        routeHandler(req,res);
      } else {
        return response.sendStatus(res, 400, 'Error! Route doesn\'t exist!');
      }
    })
    .catch( (err) => {
      console.log(err);
      res.writeHead(400);
      res.write('derpzilla');
      res.end();
    });
};