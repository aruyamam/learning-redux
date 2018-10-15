const webpack = require('webpack');
const path = require('path');

module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve('dist'),
      filename: 'main.js',
   },
   plugins: [
      new webpack.EnvironmentPlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
   ],
   module: {
      rules: [
         {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
         },
      ],
   },
};
