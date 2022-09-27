const Question = require('../models/Question')
const Quiz = require("../models/Quiz")

module.exports = {
  createQuestion: async (req, res) => {
    try {
      
      await Question.create({
        question: req.body.question,
        responses: 0,
        user: req.params.id,
        quizId: req.params.id,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer1Responses: 0,
        answer2Responses: 0,
        answer3Responses: 0,
        answer4Responses: 0,
        quiz: req.params.id
      });
      console.log("Question has been added!");
      res.redirect("/quiz/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  answerQuestion: async (req, res) => {
    try {
      await Question.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/quiz/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      // Find question by id
      let question = await Question.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(question.cloudinaryId);
      // Delete question from db
      await Question.remove({ _id: req.params.id });
      console.log("Deleted Question");
      res.redirect("/quiz");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};