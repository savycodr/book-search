import axios from "axios";

// Export an object containing methods we'll use for accessing the Google books API

export default {
  // make a call to Google books api
  // returns all of the books with a title
  getBooks: function(title) {
    console.log("I am in APi " + title);
    return axios.get(" https://www.googleapis.com/books/v1/volumes?q=" + title);
  },

  // saves the book to the database
  // because of mapping in server this will call a post to /api/books
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },

  // Call a get request to the server. This will return an array of books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  // Call a delete request to the server. 
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
