var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'views')));
app.get('/', function(req, res) {
  res.sendFile('index.html');
});



app.listen(process.env.PORT || 3000)
