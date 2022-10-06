const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
  privacy:{
    type: Boolean,
    required: true,
  },
  completedByUsers:{
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
