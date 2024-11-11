const router = require("express").Router();
const { userControllers } = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");
const { uploadUser } = require("../middleware/multer");

router.get("/", userControllers.getAllUser);
router.get("/one-user", verifyToken, userControllers.getOneUser);
router.put("/update", verifyToken, uploadUser, userControllers.editUserData);
router.put("/change-password", verifyToken, userControllers.changePassword);
router.put("/change-sosmed", verifyToken, userControllers.editLinkSosmed);
router.get("/send-verif", verifyToken, userControllers.requestVerifikasi);
router.get("/verif/:token", userControllers.verifikasiUser);
router.put("/reset-password", userControllers.resetPassword);
router.post("/request-reset", userControllers.requestResetPassword);

module.exports = router;
