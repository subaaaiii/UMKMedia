const multer = require("multer");
const path = require("path");

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "../images/user");
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const fileName =
      path.parse(file.originalname).name +
      "" +
      Date.now() +
      path.extname(file.originalname);

    cb(null, fileName);
  },
});

const storageBanner = multer.diskStorage({
  destination: (req, file, cb) => {
    let filePath;
    if (file.fieldname === "linkBanner") {
      filePath = path.join(__dirname, "../images/kelas");
    } else if (file.fieldname === "linkFotoPemateri") {
      filePath = path.join(__dirname, "../images/mentor");
    }
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const fileName =
      path.parse(file.originalname).name +
      "" +
      Date.now() +
      path.extname(file.originalname);

    cb(null, fileName);
  },
});

const storageArtikel = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "../images/artikel");
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const fileName =
      path.parse(file.originalname).name +
      "" +
      Date.now() +
      path.extname(file.originalname);

    cb(null, fileName);
  },
});

const uploadBannerMentor = multer({ storage: storageBanner }).fields([
  { name: "linkBanner", maxCount: 2 },
  { name: "linkFotoPemateri", maxCount: 2 },
]);

const uploadUser = multer({
  storage: storageUser,
}).single("file");

const uploadArtikel = multer({
  storage: storageArtikel,
}).single("file");

module.exports = {
  uploadUser,
  uploadBannerMentor,
  uploadArtikel,
};
