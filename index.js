"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '',
      pass: '' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '', // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<p><b>Hello</b> to myself!</p>",// html body
    attachments: [
      {   
          path: 'Sonamlakpasherpa.JPG' // stream this file
      },
      {  
        path: 'Z.JPG' // stream this file
    }]
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);

function loop(){
  let count;
  for(count = 0; count < 10; count++) {
      main();
  }
  }

setTimeout(loop, 6000);

// setInterval(main, 500);
