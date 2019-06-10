import axios from "axios";

// Export an object containing methods we'll use for accessing the Google books API

export default {
  // make a call to Google books api
  // returns all of the books with a title
  getBooks: function(title) {
    console.log("I am in APi " + title);
    return axios.get(" https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // returns information for a certain book by id
  // getBook: function(id) {
  //   return axios.get("https://books.google.com/books?id=" + id);
  // }

  // saves the book to the database
  // because of mapping in server this will call a post to /api/books
  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
};
