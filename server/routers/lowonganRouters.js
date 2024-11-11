const router = require("express").Router();
const { lowonganController } = require("../controllers");

router.get("/departemen", lowonganController.getAllDepartemen);
router.get("/allLowongan", lowonganController.getAllLowongan);
router.get("/:id_lowongan", lowonganController.getLowonganById);

module.exports = router;
