// Setting requires
const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Setting routes from / | Fetch books from Google Books API->db, get books from db->client, post favorites from client->db
router
    .route("/")
    // axios  
    //     .get("")
    .get(booksController.findAll)
    .post(booksController.addFavorite);

// Setting route for specific id | Fetch book by id from db->client, add favorite from client->db
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.addFavorite);

module.exports = router;