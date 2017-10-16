'use strict';

const url = require('url');
const querystring = require('querystring');

module.exports = (req, res) => {

  return new Promise( (resolve, reject) => {      
    req.url = url.parse(req.url);
    req.url.query = querystring.parse(req.url.query);
      
    // if (! ( req.method === 'PUT' || req.method === 'POST' || req.method === 'PATCH' ) ) {
    //   resolve(req, res);
    //   reject();
    // }

    resolve(req, res);
    reject(res);
      
  //   let text = '';
  //   req.on('data', (buffer) => {
  //     console.log('running through buffer');
  //     text += buffer.toString();
  //   });
      
  //   req.on('end', () => {
  //     console.log('buffer complete');
  //     try {
  //       req.body = JSON.parse(text);
  //       resolve(req);
  //     } catch (e){
  //       reject(e);
  //     }    
  //   });
  //   req.on('error', () => {
  //     console.log('step 4');
  //     reject();
  //   });
  });
};