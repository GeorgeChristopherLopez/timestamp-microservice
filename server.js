// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// send the timestamp based on current time
app.get("/api/timestamp", (request, response) => {
  // express helps us take JS objects and send them as JSON
  let date = new Date();
  response.json({
     "unix": date.getTime(),
     "utc": date.toUTCString()
  });
});

// send the timestamp based on entered time
app.get("/api/timestamp/:date_string", function (req, res) {
  const dateString = req.params.date_string;
  const numberRegExp = /^[0-9]*$/g;
  const dateRegExp=  /^\d{2}[./-]\d{2}[./-]\d{4}$/;
if(numberRegExp.test(dateString)){
    const date = new Date(parseInt(dateString));
    res.json({
     unix: date.getTime(),
    utc: date.toUTCString()
 });
 }else if (!isNaN(new Date(dateString))){
    const date = new Date(dateString);
    res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
  } else {
    res.json({"error":"Invalid Entry"})
  }
  
  
 
  
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// send the timestamp based on current time
app.get("/api/timestamp", (request, response) => {
  // express helps us take JS objects and send them as JSON
  let date = new Date();
  response.json({
     "unix": date.getTime(),
     "utc": date.toUTCString()
  });
});

// send the timestamp based on entered time
app.get("/api/timestamp/:date_string", function (req, res) {
  const dateString = req.params.date_string;
  const numberRegExp = /^[0-9]*$/g;
  const dateRegExp=  /^\d{2}[./-]\d{2}[./-]\d{4}$/;
if(numberRegExp.test(dateString)){
    const date = new Date(parseInt(dateString));
    res.json({
     unix: date.getTime(),
    utc: date.toUTCString()
 });
 }else if (!isNaN(new Date(dateString))){
    const date = new Date(dateString);
    res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
  } else {
    res.json({"error":"Invalid Entry"})
  }
  
  
 
  
  
});
