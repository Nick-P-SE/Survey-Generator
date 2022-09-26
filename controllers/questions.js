const Question = require('../models/Question')

module.exports = {
  createQuestion: async (req, res) => {
    try {
     
      await Question.create({
        question: req.body.question,
        likes: 0,
        user: req.params.id,
        quiz: req.params.id,
      });
      console.log("Question has been added!");
      res.redirect("/quiz/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      // Find question by id
      let question = await Question.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(question.cloudinaryId);
      // Delete question from db
      await Question.remove({ _id: req.params.id });
      console.log("Deleted Question");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};