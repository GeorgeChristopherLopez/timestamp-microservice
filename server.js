// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
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
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
