const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken");
const { userKelasController } = require("../controllers");

router.get("/all", verifyToken, userKelasController.kelasUserAll);
router.get(
  "/nonProgess",
  verifyToken,
  userKelasController.kelasUserNonProgress
);
router.get("/progress", verifyToken, userKelasController.kelasUserProgress);
router.get("/complete", verifyToken, userKelasController.kelasUserComplete);
router.get(
  "/progress/last",
  verifyToken,
  userKelasController.kelasUserLastProgress
);
router.post("/detail", verifyToken, userKelasController.kelasUserDetail);
router.post("/materi/mulai", verifyToken, userKelasController.MulaiMateriUser);

module.exports = router;
