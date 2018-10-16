const db = require('../db');
const APIError = require('./APIError');

module.exports = function postsAPI(app) {
   app.get('/api/posts', (req, res) => res.send(db.getPosts()));

   app.get('/api/posts/:id', (req, res) => res.send(db.getPost(req.params.id)));

   app.post('/api/posts', (req, res) => {
      const {
         user, title, text, category,
      } = req.body;
      if (!user || !title || !text) {
         throw new APIError('invalid post, `user`, `title`, and `text` required');
      }

      const userCheck = db.getUser(user);
      if (!userCheck) {
         throw new APIError('ivalid post, specified `user` does not exist');
      }

      res.send(
         db.createPost({
            user,
            title,
            text,
            category,
         }),
      );
   });

   app.post('/api/posts/:id', (req, res) => {
      const { title, text, category } = req.body;

      const updatedPost = JSON.parse(JSON.stringify({ title, text, category }));
      res.send(db.updatePost(req.params.id, updatedPost));
   });

   return {
      'GET /api/posts': 'Get all posts',
      'GET /api/posts/:id': 'Get a single post',
      'POST /api/posts': 'Create a new psot',
      'POST /api/posts/:id': 'Edit an existing post',
   };
};
