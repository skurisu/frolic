var express = require('express');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('frolic.db');
var app = express();

app.get('/locations', function (req, res) {
  db.all("SELECT * from frolic_article_locations",function(err,rows){
    res.send(rows);
  });
});

app.get('/articles', function (req, res) {
  db.all("SELECT * from frolic_articles",function(err,rows){
    res.send(rows);
  });
});

app.use('/', express.static('public'));

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

}); 