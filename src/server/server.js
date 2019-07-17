var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var PORT = 3306;
var api = require('./routes/api');
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', api);

app.get('/', function(req, res) {
   res.send('Hello from Consult Brian Server');
});

app.listen(PORT, function() {
   console.log("Consult Brian Server running on localhost:" + PORT);
});
