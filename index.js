var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

   
var obj=[
        {
            id : "001",
            name : "apple",
            category : "fruit",
            color : "red"
        },
        {
            id : "002",
            name : "melon",
            category : "fruit",
            color : "green"
        },
        {
            id : "003",
            name : "banana",
            category : "fruit",
            color : "yellow"
        }
    ]
app.get('/getItems', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj)
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


