const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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

    
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "dominiksauer76@gmail.com", // list of receivers
          subject: " Svatební kameraman ", // Subject line
          jmeno: formName, formSurname,
          datum: formDate,
          text:formText, // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
      main().catch(console.error);

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

