const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));





app.get("/", function(req, res){

    res.render("main");
});



app.post("/", function(req, res){

    let formName = req.body.inputName;
    let formSurname = req.body.inputSurname;
    let formEmail = req.body.inputEmail;
    let formDate = req.body.inputWeddingDate;
    let formText = req.body.inputText;
    let formInformation = [formName, formSurname, formEmail, formDate, formText,];   

    console.log(formInformation);

    res.redirect("/");
});



app.listen(3010, function(err){
    
    if (err) {
        console.log("-- error --");
        console.log(err);    
    } else {
        console.log("-- Server is running | port 3010 --");
        console.log("-- DSV Site --");
        console.log("-- made by Dominik Sauer --");
    }
});

