'use strict';

const url = require('url');
const querystring = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve, reject) => {      
    req.url = url.parse(req.url);
    req.url.query = querystring.parse(req.url.query);

    if (! ( req.method === 'PUT' || req.method === 'POST' || req.method === 'PATCH' ) ) {
      resolve(req);
    }
      
    let text = '';
    req.on('data', (buf) => {
      text  += buf.toString();
    });

    req.on('end', () => {
      try {
        req.body = JSON.parse(text);
        resolve(req);
      } catch (err){
        reject(err);
      }
    });
    req.on('error', err => {
      reject(err);
    });

    return;
  });
};