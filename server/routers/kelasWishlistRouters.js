const router = require("express").Router();
const kelasWishlistController = require("../controllers/kelasWishlistController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/myWishlist", verifyToken, kelasWishlistController.getWishlistByIdUSer);
router.post("/wishlist-status", verifyToken, kelasWishlistController.getWishlistStatus);
router.post("/changeWishlistBool", verifyToken, kelasWishlistController.changeWishlistBool);

module.exports = router;
