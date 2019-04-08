// Setting requires to pull all models (in this case index which only references Book)
const db = require("../models");

// Defining methods for the books controller
module.exports = {
    
    // Pulling all books from database
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
    },

    // Pull single book by id
    findById: function(req, res) {
        db.Book
            .find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Put route to add favorites
    addFavorite: function(req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};