var express = require('express');
var app = express();

var date;
var unix;

app.get("/:input", function (req, res){

    if(isNaN(req.params.input)){
        date = new Date(req.params.input);   
        unix = date.getTime() / 1000;
    }
    
    else {
        unix = req.params.input;
        date = new Date(unix*1000);
    }
    if(date && unix){
    res.send({unix: unix, natural: date});
    }
    else{
        res.send({unix: null, natural: null});
    }
});

app.listen(8080);