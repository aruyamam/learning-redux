const uuidV4 = require('uuid/v4');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const defaultDb = require('./defaultDb.json');

db.defaults(defaultDb).write();

// post related functions
const getPosts = () => db.get('posts').value();

const getPost = id => db
   .get('posts')
   .find({ id })
   .value();

const deletePost = id => db
   .get('posts')
   .remove({ id })
   .write();

const createPost = post => db
   .get('posts')
   .push(
      Object.assign(post, {
         id: uuidV4(),
         created: Date.now(),
         updated: Date.now(),
      }),
   )
   .write()
   .slice(-1)
   .pop();

const updatePost = (id, updatedPost) => db
   .get('posts')
   .find({ id })
   .assign(
      Object.assign(updatedPost, {
         updated: Date.now(),
      }),
   )
   .write();

// user related functions
const getUsers = () => db.get('users').value();

const getUser = username => db
   .get('users')
   .find({ username })
   .value();

const deleteUser = username => db
   .get('users')
   .remove({ username })
   .write();

const createUser = user => db
   .get('users')
   .push(user)
   .write()
   .slice(-1)
   .pop();

const updateUser = (username, updatedUser) => db
   .get('users')
   .find({ username })
   .assign(updatedUser)
   .write();

module.exports = {
   getPost,
   getPosts,
   deletePost,
   createPost,
   updatePost,
   getUser,
   getUsers,
   deleteUser,
   createUser,
   updateUser,
};
