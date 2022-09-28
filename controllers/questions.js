const Question = require('../models/Question')
const Quiz = require("../models/Quiz");

module.exports = {
  createQuestion: async (req, res) => {
    try {
      
      console.log(req.params.id)
      await Question.create({
        question: req.body.question,
        responses: 0,
        quiz: req.params.id,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer1Responses: 0,
        answer2Responses: 0,
        answer3Responses: 0,
        answer4Responses: 0,
        
      });
      console.log("Question has been added!");
      res.redirect("/quiz/" + req.params.id);
    } catch (err) {
      console.log(err, "this failed");
    }
  },
  submitAnswer: async (req, res) => {
    try {
      const questions = await Question.find({quiz: req.params.id}).sort({createdAt: "asc"}).lean()
      console.log(questions, req.params.id)
      for(let i = 0 ; i < questions.length ; i++){
        const currentAnswer = req.body.question1
        console.log(currentAnswer, questions[i].question)
        
        await Question.findOneAndUpdate({ _id: questions[i]._id} , {$inc: {[currentAnswer]: 1},})
        console.log(`${questions[i].question} with id:${questions[i]._id} had answer ${currentAnswer} increased by 1`)

        await Question.findOneAndUpdate({_id : questions[i]._id}, {$inc: {responses: 1}})
        console.log(`responses for quiz with id ${req.params.id} increased by 1`)
        
      }
      
      
      
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