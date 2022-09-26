const Answer = require('../models/Answer')

module.exports = {
  createAnswer: async (req, res) => {
    try {
     
      await Answer.create({
        answer: req.body.answer,
        likes: 0,
        quiz: req.params.id,
        user: req.params.id,
        question: req.params.id,
      });
      console.log("Answer has been added!");
      res.redirect("/question/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  likeAnswer: async (req, res) => {
    try {
      await Answer.findOneAndUpdate(
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
  deleteAnswer: async (req, res) => {
    try {
      // Find quiz by id
      let answer = await Answer.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(answer.cloudinaryId);
      // Delete answer from db
      await Answer.remove({ _id: req.params.id });
      console.log("Deleted Answer");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};