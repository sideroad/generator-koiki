var Express = require('express');
var webpack = require('webpack');

var config = require('../src/config');
var webpackConfig = require('./dev.config');
var compiler = webpack(webpackConfig);

var host = config.host || 'localhost';
var port = (config.port + 1) || 3001;

var config = require("./dev.config.js");
var WebpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  reload: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
});

server.listen(port);
