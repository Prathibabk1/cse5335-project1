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
            "location":"Bondi Beach",
            "latitude":-33.890542,
            "longitude": 151.274856
        },
        {
           "state":"Arizona", 
            "capital": "Phoenix",
            "location":"Coogee Beach",
            "latitude": -33.923036,
            "longitude": 151.259052
        },
        {
            "state": "Atlanta", 
            "capital" :"Georgia",
            "location":"Cronulla Beach",
            "latitude": -34.028249,
            "longitude": 151.157507
        },
        {
            "state":"Arkansas" ,
            "capital":"Little Rock",
            "location":"Manly Beach",
            "latitude": -33.80010128657071,
            "longitude": 151.28747820854187
        },
         {
            "state":"Ohio",
            "capital" : "Columbus",
             "location":"Maroubra Beach",
             "latitude": -33.950198,
             "longitude": 151.259302
        },
        {
            "state":"Kentucky" ,
            "capital":"Frankfort",
            "location":"Maroubra Beach",
            "latitude": -33.50198, 
            "longitude": 151.25902
        },
        {
            "state":"Colorado",
            "capital" : "Denver",
            "location":"Maroubra Beach",
            "latitude": -33.95018,
            "longitude": 151.29302
        },
        {
            "state":"North Carolina",
            "capital" :"Raleigh",
            "location":'Maroubra Beach',
            "latitude": -33.90198,
            "longitude": 151.25302
        },
         {
            "state":"South Carolina",
             "capital" : "Columbia",
             "location":"Maroubra Beach",
             "latitude": -33.95098,
             "longitude": 151.25902
        },
        {
            "state":"Pennsylvania",
            "capital":"Harrisburg",
            "location":"Maroubra Beach",
            "latitude": -33.95018,
            "longitude": 151.25930
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


