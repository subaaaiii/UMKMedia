const router = require("express").Router();
const { kelasSubmissionController } = require("../controllers");

router.get("/submission", kelasSubmissionController.getAllSubmission)
router.post("/submissionById", kelasSubmissionController.getAllSubmissionByIdKelas);
router.post("/submission", kelasSubmissionController.getDetailSubmission);
router.post("/create", kelasSubmissionController.createNewSubmission);
router.get("/submission", kelasSubmissionController.getAllSubmission)
router.put("/updateStatus", kelasSubmissionController.updateStatusSubmission);


module.exports = router;
