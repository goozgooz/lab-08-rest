'use strict';

const router = require('../lib/router.js');
const Note = require('./model.js');
const response = require('../lib/response.js');
const database = __dirname + '/../data/notes.dat';
const storage = require('../lib/storage')(database);

router.post('/api/notes', (req,res) => {
  
  let note = new Note(req.body);
  storage.saveItem(note)
    .then(notes => response.sendJSON(res, 200, notes))
    .catch(err => response.sendStatus(res,400, 'poorly formatted JSON'));
});

router.get('/api/notes', (req,res) => {
  // if(req.url.query.id){
  //   let id = req.url.query.id;
  //   fs.readJson(database
  //     .catch(err => response.sendStatus(res, 400, 'id does not exist'));
  // } else{
    storage.getItems()
      .then(console.log('hi'))
      .catch(console.log('bye'))
      // .then(notes => response.sendJSON(res, 200, notes))
      // .catch(err => response.sendStatus(res, 400, 'nothing in database'));
  // };
});
 
// router.delete('/api/notes', (req,res) => {
//   if(req.url.query.id){
//     let id = req.url.query.id;
//     fs.readJson(database)
//       .then(notes => {
//         console.log('deleting', id);
//         delete notes[id];
//         fs.outputFile(database, notes);
//         response.sendJSON(res, 200, 'note deleted');
//       })
//       .catch(err => response.sendStatus(res, 400, 'derp!'));
//   } else{
//     fs.readJson(database)
//       .then(notes => response.sendJSON(res, 200, notes))
//       .catch(err => response.sendStatus(res, 400, 'error nothing in database'));
//   }
// });
