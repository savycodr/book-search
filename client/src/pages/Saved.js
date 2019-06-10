import React, { Component } from "react";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {
  state = {
    books: []
  };
  // When this component mounts, grab the saved books
  componentDidMount() {
    this.loadBooks();
    console.log("I have rendered the Saved page");
  }

  deleteBook = id => {
    console.log("I am in delete method in Saved " + this.id);
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => {
        console.log("I am in the saved page " + JSON.stringify(res.data));
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
        <div>
        {!this.state.books.length ? (
          <h1 className="text-center">No Books to Display</h1>
        ) : (
            <BookList>
              {this.state.books.map(book => {
                return (
                  <BookListItem
                    book = {book}  
                    deleteBook = {(e) => this.deleteBook(book._id, e)}
                  />
                );
              })}
            </BookList>
          )}
          </div>
    );
  }
}

export default Saved;
