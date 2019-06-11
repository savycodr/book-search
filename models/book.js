const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  summary: String,
  description: String,
  url: String,
  image: String,
  googleId: { type: String, required: true, unique: [true, "This book has already been saved."]},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
