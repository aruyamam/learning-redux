const db = require('../db');
const APIError = require('./APIError');

module.exports = function usersAPI(app) {
   app.get('/api/users', (req, res) => res.send(db.getUsers()));

   app.get('/api/users/:username', (req, res) => res.send(db.getUser(req.params.username)));

   app.post('/api/users', (req, res) => {
      const { username, realname } = req.body;
      if (!username || !realname) {
         throw new APIError('invalid user, `username` and `realname` required');
      }

      // check if username is available
      const userCheck = db.getUser(username);
      if (userCheck) {
         throw new APIError('invalid user, `username` already taken');
      }

      // create user
      res.send(db.createUser({ username, realname }));
   });

   app.post('/api/users/:username', (req, res) => {
      const { realname } = req.body;

      // update user
      const updatedUser = JSON.parse(JSON.stringify({ realname }));
      res.send(db.updateUser(req.params.username, updatedUser));
   });

   return {
      'GET /api/users': 'Get all users',
      'GET /api/users/:username': 'Get a single user',
      'POST /api/users': 'Create a new user',
      'POST /api/users/:username': 'Edit an existing user',
   };
};
