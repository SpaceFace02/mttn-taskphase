const mongoose = require("mongoose");
const slugify = require("slugify");

const CSStreamSchema = new mongoose.Schema({
  Semester3: [
    {
      type: String,
    },
  ],
  Semester4: [
    {
      type: String,
    },
  ],
});

const EEEStreamSchema = new mongoose.Schema({
  Semester5: [
    {
      type: String,
    },
  ],
  Semester6: [
    {
      type: String,
    },
  ],
});

const PaperSchema = new mongoose.Schema({
  EEE: {
    type: EEEStreamSchema,
  },
  CSE: {
    type: CSStreamSchema,
  },
});

const Paper = mongoose.model("Paper", PaperSchema, "question-papers");

module.exports = Paper;
