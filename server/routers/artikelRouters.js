const router = require("express").Router();
const { artikelController } = require("../controllers");
const { uploadArtikel } = require("../middleware/multer"); // Pastikan ini mengarah ke file middleware yang benar

router.get("/navbar", artikelController.getKategori);
router.post("/kategori", artikelController.getAllArtikelByKategori);
router.get("/menarik", artikelController.getArtikelMenarik);
router.get("/allArtikel", artikelController.getAllArtikel);
router.get("/:id", artikelController.getArtikelById);
router.post("/create", uploadArtikel, artikelController.createArtikel); // Gunakan middleware uploadUser di sini
router.put("/:id", uploadArtikel, artikelController.updateArtikel);
router.delete("/:id", artikelController.deleteArtikel);

module.exports = router;
