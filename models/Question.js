const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true,
    },
    answer1: {
      type: String,
      required: true,
    },
    answer1Responses: {
      type: Number,
      required: true,
    },
    answer2: {
      type: String,
      required: true,
    },
    answer2Responses: {
      type: Number,
      required: true,
    },
    answer3: {
      type: String,
      required: false,
    },
    answer3Responses: {
      type: Number,
      required: false,
    },
    answer4: {
      type: String,
      required: false,
    },
    answer4Responses: {
      type: Number,
      required: false,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    responses: {
      type: Number,
      required: true,
    },

});

module.exports = mongoose.model("Question", QuestionSchema);
