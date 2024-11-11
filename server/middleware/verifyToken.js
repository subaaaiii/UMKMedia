const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    let token = req.headers.authorization;
    console.log({ token });

    if (!token) {
      return res.status(401).send({
        error: true,
        message: "Token not found!",
        isData: false,
        data: null,
      });
    }

    try {
      const validateTokenResult = jwt.verify(token, process.env.SECRET_JWT);
      req.dataToken = validateTokenResult;

      next();
    } catch (error) {
      res.status(401).send({
        isError: true,
        message: "Invalid Token",
        data: null,
      });
    }
  },
};
