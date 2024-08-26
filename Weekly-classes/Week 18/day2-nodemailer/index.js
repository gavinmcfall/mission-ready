const nodemailer = require("nodemailer");
const {
  emailUser,
  emailPass,
  senderName,
  recipientEmail,
} = require("./config");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const mailOptions = {
  from: senderName,
  to: recipientEmail,
  subject: "Exercise",
  text: "It's good for the body and brain",
  html: "<h1>Exercise</h1><p>It's good for the <strong>body</strong> and <strong>brain</strong></p>",
};

transporter.sendMail(mailOptions);
