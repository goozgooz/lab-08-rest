'use strict';

const superagent = require('superagent');
// const expect = require('expect');
const server = require('../lib/server.js');

describe('api/notes', () => {
  
  beforeAll( () => server.listen(3000));
  afterAll( () => server.close());

  describe('post /api/notes', () => {
    test('it should respond with 200', () => {
      return superagent.post('http://localhost:3000/api/notes')
        .send({
          title:"herp", 
          content:"derp"    
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body.title).toBe('herp');
          expect(res.body.content).toBe('derp');
        })
    });
    test('should respond with a 200 with a .get request and no ID', () => {
      return superagent.get('http://localhost:3000/api/notes')
        .then(res => {
          expect(res.status).toEqual(200);
        }) 
    });
  });
});


