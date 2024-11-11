const router = require("express").Router();
const { cmsAuthController } = require("../controllers");
const { verifyToken, permissionRole } = require("../middleware/validation");

router.post("/login", cmsAuthController.loginUser);
router.post(
  "/register",
  verifyToken,
  permissionRole("admin_super"),
  cmsAuthController.createUser
);
router.get("/profile", verifyToken, cmsAuthController.myUser);
router.get(
  "/users",
  verifyToken,
  permissionRole("admin_super"),
  cmsAuthController.getAllUser
);
router.get(
  "/user/:id",
  verifyToken,
  permissionRole("admin_super"),
  cmsAuthController.getOneUser
);
router.put(
  "/users/:id",
  verifyToken,
  permissionRole("admin_super"),
  cmsAuthController.updateUser
);
router.delete(
  "/users/:id",
  verifyToken,
  permissionRole("admin_super"),
  cmsAuthController.deleteUser
);
// router.get(
//   "/testing",
//   verifyToken,
//   permissionRole("admin_super"),
//   cmsAuthController.demoAuth
// );

module.exports = router;
