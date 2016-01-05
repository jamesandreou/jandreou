var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');

var app = express();
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({    
  extended: false
}));
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.set('port', (process.env.PORT || 5000));

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Starting jandreou.com');
});

