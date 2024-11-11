const router = require("express").Router();
const { kelasBisnisController } = require("../controllers");
const { verifyToken } = require("../middleware/validation");
const { uploadBannerMentor } = require("../middleware/multer");

router.post("/kategori", kelasBisnisController.getKategoriKelas);
router.post("/level", kelasBisnisController.getLevelKelas);
router.post("/data", kelasBisnisController.getKelasBisnis);
router.post("/detail", kelasBisnisController.getDetailKelasBisnis);
router.post("/hargaFilter", kelasBisnisController.getHargaFilter);
router.post(
  "/postData",
  verifyToken,
  uploadBannerMentor,
  kelasBisnisController.createNewKelasBisnis
);
router.patch(
  "/postData",
  verifyToken,
  uploadBannerMentor,
  kelasBisnisController.updateKelasBisnis
);
router.delete("/postData/:id", verifyToken, kelasBisnisController.deleteKelasBisnis);

module.exports = router;
