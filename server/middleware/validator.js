const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  authorize: async (req, res, next) => {
    console.log({ key: req.headers.key });
    console.log({ env: process.env.ACCESS_KEY });
    const access = process.env.ACCESS_KEY;

    if (req.headers.key == access) {
      return next();
    } else res.status(500).send({ message: "Token tidak valid" });
  },
};
