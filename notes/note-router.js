'use strict';

const router = require('../lib/router.js');
const Note = require('./model.js');
const response = require('../lib/response.js');
const database = __dirname + '/../data/notes.dat';
const storage = require('../lib/storage.js')(database);

router.post('/api/notes', (req,res) => {
  let note = new Note(req.body);
  storage.saveItem(note)
    .then(notes => response.sendJSON(res, 200, notes))
    .catch(err => response.sendStatus(res,400, 'poorly formatted JSON'));
});

router.get('/api/notes', (req,res) => {

  let id = req.url && req.url.query && req.url.query.id;

  if(id) {
    storage.getItemID(id)
      .then(note => response.sendJSON(res,200,note))
      .catch( () => response.sendStatus(res,400, 'that note does not exist'));
  } else {
    storage.getItems()
      .then(allNotes => {
        console.log(allNotes);
        response.sendJSON(res, 200, allNotes);
      })
      .catch( () => response.sendStatus(res, 400, 'nothing in database'));
  }
});
 
router.delete('/api/notes', (req,res) => {
  if(req.url.query.id){
    let id = req.url.query.id;
    storage.deleteItem(id);
    response.sendStatus(res, 200, 'note deleted');
  }
  else{
    response.sendStatus(res, 400, 'no ID given');
  }
});

