const router = require("express").Router();
const { kelasSubmissionController } = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/submission", kelasSubmissionController.getAllSubmission)
router.post("/submissionById", kelasSubmissionController.getAllSubmissionByIdKelas);
router.post("/submissionByUser",verifyToken, kelasSubmissionController.getDetailSubmission);
router.post("/create", verifyToken, kelasSubmissionController.createNewSubmission);
router.get("/submission", kelasSubmissionController.getAllSubmission)
router.put("/updateStatus", kelasSubmissionController.updateStatusSubmission);
router.put("/updateSubmission", kelasSubmissionController.updateSubmission);



module.exports = router;
