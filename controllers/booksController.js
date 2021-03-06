const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("INSIDE Controller " + JSON.stringify(req.body.book));
    db.Book
      .create(req.body.book)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("During create had an error " +err.message);
        if (err.message.indexOf('duplicate key error') !== -1){
          res.status(500).send({ error: "This book has already been saved." });
        } else {
          res.status(422).json(err);
      }
      });
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
