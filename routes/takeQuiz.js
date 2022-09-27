const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const quizzesController = require("../controllers/quizzes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Quiz Routes - simplified for now
//router.get("/:id", ensureAuth, quizzesController.getQuiz);

//router.post("/createQuiz", quizzesController.createQuiz);

router.get("/:id", quizzesController.takeQuiz)

//router.put("/likeQuiz/:id", quizzesController.likeQuiz);

//outer.delete("/deleteQuiz/:id", quizzesController.deleteQuiz);

module.exports = router;
