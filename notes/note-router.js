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
    res.sendStatus(res, 400, 'poorly given info');
  }
});

router.get('/api/notes', (req,res) => {

  if(req.url.query.id){
    response.sendStatus(res,200,'you gave an id');
  } else{
    let allNotes = {notes:notes};
    response.sendJSON(res,200,allNotes);  
  }

});
