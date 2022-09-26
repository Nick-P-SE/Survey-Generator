const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

module.exports = mongoose.model("Question", QuestionSchema);
