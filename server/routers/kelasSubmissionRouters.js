const router = require("express").Router();
const { kelasSubmissionController } = require("../controllers");

router.post("/submission", kelasSubmissionController.getDetailSubmission);
router.post("/create", kelasSubmissionController.createNewSubmission);


module.exports = router;
