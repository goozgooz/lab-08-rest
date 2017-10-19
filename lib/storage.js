'use strict';

const fs = require('fs-extra');
const Note = require('../notes/model.js');

class Storage {

  constructor(db) {

    this.database = db;
    fs.pathExists(this.database)
      .then( exists => !exists && fs.outputJson(this.database, {} ));
  }

  getItems(){
    fs.readJson(this.database)
      .then(notes => response.sendJSON(res, 200, notes))
      .catch(err => response.sendStatus(res, 400, 'nothing in database'));
  }


  saveItem(item){

  }

}

module.exports = db => new Storage(db);

