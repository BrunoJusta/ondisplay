export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "Gmail",
    auth: {
      user: "tourfcm@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "tourfcm@gmail.com",
    to: req.body.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: tourfcm@gmail.com" + req.body.email,
    html: `<div>${req.body.message}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
