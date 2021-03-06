var path = require('path');
var express = require('express');
var httpProxy = require('http-proxy');
var webpack = require('webpack');
var config = require('../config/webpack.config.staging');

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

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('static'));


app.get('/zipato-web/images/*', proxy);

app.get('/zipato-web/v2/*', proxy);
app.post('/zipato-web/v2/*', proxy);
app.put('/zipato-web/v2/*', proxy);
app.delete('/zipato-web/v2/*', proxy);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'))
})

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
