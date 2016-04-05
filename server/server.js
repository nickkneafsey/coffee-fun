var express = require('express');
var app = express();

app.use(express.static('client'));

app.set('port', (process.env.PORT || 9595));

var server = app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});