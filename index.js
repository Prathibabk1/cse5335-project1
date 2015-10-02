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
            "state":"Texas",
            "capital": "Autsin"
        },
        {
           "state":"Arizona", 
            "capital": "Phoenix"
        },
        {
            state: "Atlanta", 
            capital :"Georgia"
        },
        {
            state:"Arkansas" ,
            capital:"Little Rock"
        },
         {
            state:"Ohio",
            capital : "Columbus"
        },
        {
            state:"Kentucky" ,
            capital:"Frankfort"
        },
        {
            state:"Colorado",
            capital : "Denver"
        },
        {
            state:"North Carolina",
            capital :"Raleigh"
        },
         {
            state:"South Carolina",
             capital : "Columbia"
        },
        {
            state:"Pennsylvania",
            capital:"Harrisburg"
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


