'use strict';

const router = require('../lib/router.js');
const Note = require('./model.js');
const response = require('../lib/response.js');

let notes = [];

router.post('/api/notes', (req,res) => {
  try {
    let note = new Note(req.body);
    notes.push(note);
    response.sendJSON(res, 200, note);
  } catch (err) {
    console.log(err);
  }
  response.sendStatus(res, 200, 'post request');


  // if(!req.body) return response.sendStatus(res, 400, 'no info given');
  // let note = new Note(req.body);
  // notes.push(note);
  // response.sendJSON(res, 200, note);
  // response.sendStatus(res, 200, 'post request');
});

router.get('/api/notes', (req,res) => {
  // notes.forEach(note => {
  //   response.sendJSON(res, 200, note);
  // });
  response.sendStatus(res, 200, 'get request');
});
