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

    var obj = {"s1": {"state":"Texas", "capital": "Autsin" },
                "s2":{"state":"Arizona", "capital": "Phoenix"},
                "s3":{"state": "Atlanta", "capital" :"Georgia"},
                 "s4":{"state":"Arkansas" , "capital":"Little Rock"},
                 "s5":{"state":"Ohio","capital" : "Columbus"},
                 "s6":{"state":"Kentucky" ,"capital":"Frankfort"},
                 "s7":{"state":"Colorado", "capital" : "Denver"},
                 "s8":{"state":"North Carolina","capital" :"Raleigh"},
                 "s9":{"state":"South Carolina","capital" : "Columbia"},
                 "s10":{"state":"Pennsylvania","capital":"Harrisburg"}

          };
app.get('/getItems', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj)
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


