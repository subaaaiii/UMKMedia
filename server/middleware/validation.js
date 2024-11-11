require("dotenv").config();
const jwt = require("jsonwebtoken");
const { cms_auth, Role } = require("../models");

module.exports = {
  verifyToken: async (req, res, next) => {
    let token;
    let decode;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "You are not login!",
      });
    }

    try {
      decode = await jwt.verify(token, process.env.SECRET_JWT);
    } catch (err) {
      return res.status(401).json({
        error: err,
        message: "Token not valid!",
      });
    }
    const currentAdmin = await cms_auth.findByPk(decode.id);

    if (!currentAdmin) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Token not found!",
      });
    }

    admin = currentAdmin;

    next();
  },

  permissionRole: (...roles) => {
    return async (req, res, next) => {
      const rolesData = await Role.findByPk(admin.roleId);
      const roleName = rolesData.nama_role;

      if (!roles.includes(roleName)) {
        return res.status(403).json({
          status: "Forbidden",
          message: "No Permission!",
        });
      }

      next();
    };
  },
};
