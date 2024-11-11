const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "officialgrowlab.id@gmail.com",
    pass: "dzexqucdalwgcrdu",
  },
});

module.exports = transporter;
