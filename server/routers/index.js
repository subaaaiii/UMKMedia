const loginRouters = require("./loginRouters");
const userRouters = require("./userRouters");
const artikelRouters = require("./artikelRouters");
const lowonganRouters = require("./lowonganRouters");
const kelasBisnisRouters = require("./kelasBisnisRouters");
const userKelasRouters = require("./userKelasRouters");
const kelasWishlistRouters = require("./kelasWishlistRouters");
const testingRouter = require("./testingRouters");
const kelasTransaksiRouters = require("./kelasTransaksiRouters");
const cmsAuthRouters = require('./cmsAuthRouters')
const kelasSubmissionRouters = require('./kelasSubmissionRouters')

module.exports = {
  loginRouters,
  userRouters,
  artikelRouters,
  lowonganRouters,
  kelasBisnisRouters,
  userKelasRouters,
  kelasWishlistRouters,
  kelasTransaksiRouters,
  testingRouter,
  cmsAuthRouters,
  kelasSubmissionRouters
};
