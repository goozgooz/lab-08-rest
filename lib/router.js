'use strict';


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
  
};