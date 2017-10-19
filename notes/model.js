'use strict';

const uuid = require('uuid');

class Note {

  constructor(config) {
    this.id = uuid.v1();
    this.createdOn = new Date(); 
    this.title = config.title || '';
    this.content = config.content || '';
  }
}

module.exports = Note;