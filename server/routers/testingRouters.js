const router = require("express").Router();
const { testingController } = require("../controllers");

router.get("/get-duration", testingController.getVideoDuration);

module.exports = router;
