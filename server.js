const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));





app.get("/", function(req, res){

    res.render("main");
});



app.listen(3010, function(err){
    if (err) {
        console.log(err);    
    } else {
        console.log("-- Server is running | port 3010 --");
    }
});

