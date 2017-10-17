'use strict';

const router = require('../lib/router.js');
const Note = require('./model.js');
const response = require('../lib/response.js');
const fs = require('fs-extra');
const database = ('./data/notes.dat');

router.post('/api/notes', (req,res) => {
  try {
    let note = new Note(req.body);
    
    let data = {};
    data[note.id] = note;
    let saveNote = JSON.stringify(data);

    fs.outputFile(database, saveNote)
      .then(response.sendJSON(res, 200, note))
      .catch(err => response.sendStatus(res, 400, err));
  } catch (err) {
    response.sendStatus(res, 400, 'poorly given info');
  }
});

router.get('/api/notes', (req,res) => {
  if(req.url.query.id){
    let id = req.url.query.id;
    fs.readJson(database)
      .then(notes => {
        let note = notes[id];
        response.sendJSON(res, 200, note);
      })
      .catch(err => response.sendStatus(res, 400, 'id does not exist'));
  } else{
    fs.readJson(database)
      .then(notes => response.sendJSON(res, 200, notes))
      .catch(err => response.sendStatus(res, 400, 'error reading JSON'));
  }
});
 
router.delete('/api/notes', (req,res) => {
  if(req.url.query.id){
    let id = req.url.query.id;
    fs.readJson(database)
      .then(notes => {
        delete notes[id];
        response.sendJSON(res, 200, 'note deleted');
      })
      .catch(err => response.sendStatus(res, 400, 'derp!'));
  } else{
    fs.readJson(database)
      .then(notes => response.sendJSON(res, 200, notes))
      .catch(err => response.sendStatus(res, 400, 'error reading JSON'));
  }
});
