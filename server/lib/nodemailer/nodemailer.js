const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "officialumkmedia@gmail.com",
    pass: "gbhrgxbbdmoysuot",
  },
});

module.exports = transporter;
