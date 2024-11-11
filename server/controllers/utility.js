const jwt = require("jsonwebtoken");
require("dotenv").config();

const makeJWT = (data) => {
  console.log({ data });
  const payload = {
    email: data.email,
    id_role: data.id_role,
  };
  const result = jwt.sign(payload, process.env.SECRET_JWT, {
    algorithm: "HS256",
    expiresIn: "30d",
    issuer: "Growlab",
  });
  return result;
};

const getEmailFromToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    return decoded.email;
  } catch (error) {
    // Handle error, token tidak valid atau sudah kedaluwarsa
    console.error('Error decoding JWT:', error.message);
    return null;
  }
};

const checkAvailableColumn2 = async (Model, column, value) => {
  try {
    const condition = {[column]: value};

    const result = await Model.findOne({where: condition});

    if (result)return false;
    else return true;

  } catch (error) {
    console.error("Error executing query: " + error);
    return false;
  }
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function createResponse(res, status, result, message, data = null) {
  if (data) {
    return res.status(status).json({ result, message, data });
  } else {
    return res.status(status).json({ result, message });
  }
}

module.exports = {
  makeJWT,
  checkAvailableColumn2,
  validateEmail,
  createResponse,
};
