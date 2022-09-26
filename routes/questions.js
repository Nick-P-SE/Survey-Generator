const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const questionsController = require("../controllers/questions");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Question Routes - simplified for now
// router.get("/:id", ensureAuth, questionsController.getQuestion);

router.post("/createQuestion", upload.single("file"), questionsController.createQuestion);

router.delete("/deleteQuestion/:id", questionsController.deleteQuestion);

module.exports = router;
