import React, { Component } from "react";
import API from "../utils/API";
import { BookList, GoogleBookListItem } from "../components/BookList";
import { Input, FormBtn } from "../components/Form";


const styles = {
  h2: {
    color: "red",
  }
};


// in state we hold the array of books that are populated from the api call to google books, the title the user is searching for, an error when a save is called on a book that was already saved.
class Search extends Component {
  state = {
    books: [],
    title: "",
    saveError: false
  };

  componentDidMount() {
    // this.loadBooks();
    console.log("I have rendered the Search Page");
  }

  // call the api to get all the books with this title
  // this is a clientside call to google books
  loadBooks = () => {

    // reset any error messages
    this.setState({ saveError: false });

    API.getBooks(this.state.title)
      .then(res => {
        // console.log("data is: " + JSON.stringify(res.data));
        // console.log("the data is length: " + res.data.items.length);
        // console.log("the first title: " + res.data.items[0].volumeInfo.title);
        let localBooks = [];

        // lets grab the information that we need
        res.data.items.map(item => {
          let book = {};
          book.googleId = item.id;
          book.title = item.volumeInfo.title;
          book.authors = item.volumeInfo.authors;
          book.description = item.volumeInfo.description;
          // console.log("title " + book.title + " description " + book.description);
          item.searchInfo ? book.summary = item.searchInfo.textSnippet :  book.summary = "";
          book.url = item.volumeInfo.infoLink;
          book.image = item.volumeInfo.imageLinks.thumbnail;
          localBooks.push(book);
        })

        // set state
        this.setState({ books: localBooks });

      })
      .catch(err => console.log(err));
  };

  // this is the method called when save button is clicked
  // It will call a post to the /books route.
  saveBook = (newBook, e) => {

  // console.log("saved!!! " + newBook.title);

  API.saveBook({
    book: newBook
  })
    .then( () => {
      // when a book has been saved what do you want to do?
      // remove it from the display
      // Filter this.state.books for books with an id not equal to the id being removed
      const newBooks = this.state.books.filter(book => book.googleId !== newBook.googleId);
      // Set this.state.friends equal to the new books array        
      this.setState({ books: newBooks });
      // reset any error messages
      this.setState({ saveError: false });

    })
    // this might happen if the user selects a book that has already been saved
    // In this case we might want to tell the user
    .catch(err => {
      // check if the error is because the book has already been saved.
      if (err.response.status === 500)
      {
        this.setState({ saveError: true });
      }
      console.log(err)
    });
}

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("name: " + name + " value: " + value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  };

  render() {
    return (
      // <form>
      //   <Input
      //     name="title"
      //     placeholder="Title (required)"
      //   />
      //   <FormBtn>
      //     Submit Book
      //   </FormBtn>

      // </form>
      <div className="container">
        <form>
          <div className="form-group">
            <label >Book:</label>
            <input className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title of Book (required)"
            />
            <br/>
            <button type="submit"
              disabled={!(this.state.title)}
              onClick={this.handleFormSubmit}
              className="btn btn-success">
              Search
            </button>
          </div>
        </form>

        {!this.state.books.length ? (
          <h1 className="text-center">No Books to Display</h1>
        ) : (
            <BookList>
              {this.state.saveError ? <h2 style={styles.h2}>This book has already been saved</h2> : <br/>}

              {this.state.books.map(book => {
                return (
                  <GoogleBookListItem
                    // key={book.id}
                    // title={book.title}
                    // authors={book.authors}
                    // summary={book.summary}
                    // description={book.description}
                    // href={book.url}
                    // thumbnail={book.image} 
                    book = {book}  
                    saveBook = {(e) => this.saveBook(book, e)}
                  />
                );
              })}
            </BookList>
          )}
      </div>
    );
  }
}

export default Search;
