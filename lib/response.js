'use strict';

let response = module.exports = {};

response.sendStatus = (res, status, message) => {
  res.writeHead(status);
  res.write(message);
  res.end();
};

response.sendJSON = (res, status, data) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
  });
  res.write(JSON.stringify(data));
  res.end();
};