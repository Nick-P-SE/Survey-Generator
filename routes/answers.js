const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const answersController = require("../controllers/answers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Answer Routes - simplified for now
// router.get("/:id", ensureAuth, answersController.getAnswer);

router.post("/createAnswer", upload.single("file"), answersController.createAnswer);

router.put("/likeAnswer/:id", answersController.likeAnswer);

router.delete("/deleteAnswer/:id", answersController.deleteAnswer);

module.exports = router;
