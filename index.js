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
      user: 'bvoc2754helpline@gmail.com',
      pass: '10hph2638' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'shivam.bhardwaj18400@gmail.com', // sender address
    to: "fivuhoha@directmail24.net", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<p><b>Hello</b> to myself!</p>",// html body
    attachments: [
      {   // utf-8 string as an attachment
          filename: 'encrypted.txt',
          content: 'VEhJUyBJUyBBIFNFQ1JFVCEhISEgQklUQ0g=',
          encoding: 'base64'
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

setTimeout(loop, 50000);

// setInterval(main, 500);
