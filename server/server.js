var express = require('express');
var app = express();

var indexRouter = require('./public/routes/index');

app.use(express.static('server/public'));
app.use('/', indexRouter);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
