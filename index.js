// var express = require('express');
// var path = require('path');
// var app = express();

// app.use(express.static(path.join(__dirname,'views')));
// app.get('/', function(req, res) {
//   res.sendFile('index.html');
// });


// app.listen(3000);

var http = require('http');

function onReq (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

app.listen(process.env.PORT || 3000)
