const webpack = require('webpack');
const prodConfig = require('./webpack.config.prod');

module.exports = Object.assign(prodConfig, {
   mode: 'development',
   entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      prodConfig.entry,
   ],
   devtool: 'inline-source-map',
   devServer: {
      hot: true,
      contentBase: prodConfig.output.path,
      publicPath: '/',
   },
   plugins: prodConfig.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
   ]),
});
