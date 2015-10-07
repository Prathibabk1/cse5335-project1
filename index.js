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
            "capital": "Autsin",
            "location":"Austin",
            "latitude":30.2500, 
            "longitude":-97.7500
        },
        {
           "state":"Arizona", 
            "capital": "Phoenix",
            "location":"Phoenix",
            "latitude": 33.4500, 
            "longitude":-112.0667
        },
        {
            "state": "Atlanta", 
            "capital" :"Georgia",
            "location":"Georgia",
            "latitude": 32.9605,
            "longitude":-83.1132
        },
        {
            "state":"Arkansas" ,
            "capital":"Little Rock",
            "location":"Little Rock",
            "latitude": 34.7361,
            "longitude":-92.3311
        },
         {
            "state":"Ohio",
            "capital" : "Columbus",
             "location":"Columbus",
             "latitude": 39.9833, 
             "longitude":-82.9833
        },
        {
            "state":"Kentucky" ,
            "capital":"Frankfort",
            "location":"Frankfort",
            "latitude":38.1970, 
            "longitude":-84.8630
        },
        {
            "state":"Colorado",
            "capital" : "Denver",
            "location":"Denver",
            "latitude":-39.7392,
            "longitude":104.9903
        },
        {
            "state":"North Carolina",
            "capital" :"Raleigh",
            "location":'Raleigh',
            "latitude": 35.7806,
            "longitude":-78.6389
        },
         {
            "state":"South Carolina",
             "capital" : "Columbia",
             "location":"Columbia",
             "latitude": 34.0298,
             "longitude":-80.8966
        },
        {
            "state":"Pennsylvania",
            "capital":"Harrisburg",
            "location":"Harrisburg",
            "latitude":40.2697, 
            "longitude":-76.8756
        }
    ];
app.get('/getItems', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj);
}); 



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


