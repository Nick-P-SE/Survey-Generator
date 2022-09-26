const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  likes: {
    type: Number,
    required: true,
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

module.exports = mongoose.model("Answer", AnswerSchema);
