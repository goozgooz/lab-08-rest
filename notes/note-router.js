'use strict';

const router = require('../lib/router.js');
const Note = require('./model.js');
const response = require('../lib/response.js');

let notes = [];

// router.post('/api/notes', (req,res) => {
//   console.log(req.body);
//   if(!req.body) return response.sendStatus(res, 400, 'no info given');
//   let note = new Note(req.body);
//   notes.push(note);
//   response.sendJSON(res, 200, note);
//   res.end();
// });

router.get('/api/notes', (req,res) => {
  response.sendStatus(res, 200, 'get request');
});