var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: './bookmarks/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, '')));

app.set('port', process.env.PORT || 3000);


app.post('/bookmarks', upload.single('file'), function(req, res) {
    res.status(200).send({message:'Bookmark uploaded successfully!'});
});

app.get('/bookmarks', function (req, res) {
    var fs = require('fs');
    fs.readdir('bookmarks', function (error, bookmarks) {
        if (error) {
            res.status(409).send({error: 'There was an error retrieving the images!'});
        }
        else {
            res.status(200).send({bookmarks: bookmarks});
        }
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});