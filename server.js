"use strict";

const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "simmons.diana93@gmail.com",
            pass: "M!sCMBr0wn4Ever!"
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Diana Simmons" <simmons.diana93@gmail.com>', // sender address
        to: 'simmons.diana93@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
