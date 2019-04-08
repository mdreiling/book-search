// Setting requires
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Setting up Schema for books that will be passed into database
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Setting Book constant as model schema set up above
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;