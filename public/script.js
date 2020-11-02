
var date = new Date();
var utcDate = date.toUTCString();
var unixDate = date.getTime();
var month = date.getUTCMonth() + 1; //months from 1-12
var day = date.getUTCDate();
var year = date.getUTCFullYear();
let url = "https://nonstop-vast-gopher.glitch.me/api/timestamp/";

var dateString = year + "-" + month + "-" + day;
document.getElementById('result').innerHTML = `{
    "unix": ${unixDate}, 
    "utc": ${utcDate}
  }`

document.getElementById('unixExample').innerHTML = url + unixDate;
document.getElementById('utcExample').innerHTML = url + dateString;
document.getElementById('unixExample').href = "/api/timestamp/" + unixDate;
document.getElementById('utcExample').href = "/api/timestamp/" + dateString;
