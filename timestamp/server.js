var express = require('express');
var app = express();

var date;
var unix;

app.get("/", function (req, res){
    if(isNaN(req)){
        date = new Date(req);   
        unix = date.getTime() / 1000;
    }
    else {
        unix = req;
        date = new Date(unix);
    }
    if(date && unix){
    res.write("unix: " + unix + ", natural: " + date);
    res.send();
    }
    else{
        res.write("unix: " + null + ", natural: " + null);
        res.send();
    }
});

app.listen(8080);