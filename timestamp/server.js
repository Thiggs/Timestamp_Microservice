var express = require('express');
var app = express();

var date;
var unix;

app.get("/", function(req, res){
    if(date = new Date(req)){
        date = new Date(req);   
        unix = date.getTime() / 1000;
    }
    else if(unix = req.getTime()/1000){
        req.getTime()/1000;
        date = new Date(unix);
    }
    console.log(unix, date);
});

app.listen(8080);