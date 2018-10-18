const express = require('express');
const joinPath = require('path').join;
const fs = require('fs');

module.exports = function createRouter(
   path,
   index = 'index.html',
   config = 'webpack.config.dev.js',
   dist = 'dist',
) {
   const router = new express.Router();

   if (!path) {
      throw new Error('please specify a path');
   }

   const distPath = joinPath(path, dist);
   const webpackConfig = require(joinPath(path, config));

   if (process.env.NODE_ENV === 'production') {
      console.log('prod mode: serving client static assets');
      router.use(express.static(distPath));
      router.get('*', (req, res) => res.sendFile(joinPath(distPath, index)));
   }
   else {
      console.log('dev mode: serving frontend from wbpac... please wait');

      const requireFrontend = module => require(joinPath(path, 'node_modules', module));

      const webpack = requireFrontend('webpack');

      const compiler = webpack(webpackConfig);
      const devMiddleware = requireFrontend('webpack-dev-middleware')(compiler, { noInfo: true });

      const loadAndCacheFile = (req, res) => {
         const file = req.path === '/' ? '/index.html' : req.path;
         const filePath = joinPath(path, file);

         if (!devMiddleware.fileSystem.existsSync(filePath)) {
            if (!fs.existsSync(filePath)) return res.status(404).end();

            const folderPath = filePath
               .split('\\')
               .slice(0, -1)
               .join('\\');
            devMiddleware.fileSystem.mkdirpSync(folderPath);
            devMiddleware.fileSystem.writeFileSync(filePath, fs.readFileSync(filePath));
         }

         return res.end(devMiddleware.fileSystem.readFileSync(filePath));
      };

      router.use(devMiddleware);
      router.use(requireFrontend('webpack-hot-middleware')(compiler));
      router.get('*', loadAndCacheFile);
   }

   return router;
};
