var express = require('express')
var multer = require('multer')
var path = require('path')
var upload = multer()
var app = express();

var port = process.env.PORT || 3000;


app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/upload', upload.single('upl'), function(req, res, next){
    res.json({'size': req.file.size})
})

app.listen(port, function() {
    console.log('Server listening on port:', port)   
})

