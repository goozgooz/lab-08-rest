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
  }
  
  saveItem(item){
    return new Promise((resolve, reject) => {
      this.getItems()
        .then( data => {
          data[item.id] = item;
          let saveData = JSON.stringify((data));
          console.log('hi');
          fs.outputFile(this.database, saveData)
            .then(resolve(item))
            .catch(reject())
        })
       
    });
  }
  

}

module.exports = db => new Storage(db);

