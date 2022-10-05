const Quiz = require("../models/Quiz");
const Question = require('../models/Question')

module.exports = {
  getProfile: async (req, res) => {
    try {
      const quizzes = await Quiz.find({ user: req.user.id });
      res.render("profile.ejs", { quizzes: quizzes, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const quizzes = await Quiz.find({privacy:false}).sort({likes: "desc"}).populate('user').lean();
      const questions = await Question.find().sort({createdAt: "desc"}).lean()
      
      res.render("feed.ejs", { quizzes: quizzes, user: req.user, questions: questions,});
    } catch (err) {
      console.log(err);
    }
  },
  getQuiz: async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      const questions = await Question.find({quiz: req.params.id}).sort({likes: "desc"}).lean()
      //console.log(quiz, questions)
      res.render("quiz.ejs", { quiz: quiz, user: req.user, questions: questions});
    } catch (err) {
      console.log(err);
    }
  },
  takeQuiz: async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      const questions = await Question.find({quiz: req.params.id}).sort({createdAt: "asc"}).lean()
      console.log(questions)
      res.render("takeQuiz.ejs", { quiz: quiz, user: req.user, questions: questions});
    } catch (err) {
      console.log(err);
    }
  },
  
  createQuiz: async (req, res) => {
    try {
      console.log('what is in fields?', req.body.title, req.body.description, req.body.privacy)
      let private = false
      if ( req.body.privacy === undefined ) private = true
      await Quiz.create({
        title: req.body.title,
        description: req.body.description,
        likes: 0,
        user: req.user.id,
        privacy: private,
        completedByUsers: [],
      });
      console.log("Quiz has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  
  likeQuiz: async (req, res) => {
    try {
      await Quiz.findOneAndUpdate(
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
  deleteQuiz: async (req, res) => {
    try {
      // Find quiz by id
      let quiz = await Quiz.findById({ _id: req.params.id });
      // Delete image from cloudinary
      
      // Delete quiz from db
      await Quiz.remove({ _id: req.params.id });
      console.log("Deleted Quiz");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
  getStatistics: async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      const questions = await Question.find({quiz: req.params.id}).sort({createdAt: "asc"}).lean()
      const quizzes = await Quiz.find({ user: req.user.id })
      console.log(quiz, questions)
      res.render("statistics.ejs", { quiz: quiz, user: req.user, questions: questions, quizzes: quizzes});
    } catch (err) {
      console.log(err);
    }
  },
};
