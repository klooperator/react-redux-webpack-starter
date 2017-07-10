var path = require('path');
var express = require('express');
var httpProxy = require('http-proxy');
var webpack = require('webpack');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config.js');

var app = express();
var compiler = webpack(config);
var apiProxy = httpProxy.createProxyServer();
apiProxy.on('error', function (err, req, res) {console.log(err);});

function proxy(req, res){
  try {
    apiProxy.web(req, res, { target: 'http://my.zipato.com:8080' });
  } catch (e) {
    console.log(e);
  }
}

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.use('/static', express.static('static'));


app.get('/zipato-web/images/*', proxy);

app.get('/zipato-web/v2/*', proxy);
app.post('/zipato-web/v2/*', proxy);
app.put('/zipato-web/v2/*', proxy);
app.delete('/zipato-web/v2/*', proxy);

/*app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'))
})*/

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
