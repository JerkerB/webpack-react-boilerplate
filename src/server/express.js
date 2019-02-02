import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const server = express();

const config = require('../../config/webpack.dev.js');

const compiler = webpack(config);

server.use(webpackDevMiddleware(
  compiler,
  config.devServer,
));
server.use(webpackHotMiddleware(compiler));

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(8080, () => {

});
