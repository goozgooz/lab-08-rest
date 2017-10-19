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
    return fs.readJson(this.database);
  }

  getItemID(id){
    return new Promise((resolve, reject) => {
      fs.readJson(this.database)
        .then(item => resolve(item[id]))
        .catch(err => reject(err));
    });
  }
  
  saveItem(item){
    return new Promise((resolve, reject) => {
      this.getItems()
        .then( data => {
          data[item.id] = item;
          fs.outputFile(this.database, JSON.stringify(data))
            .then(resolve(item))
            .catch(reject(e));
        });
    });
  }
  

}

module.exports = db => new Storage(db);

