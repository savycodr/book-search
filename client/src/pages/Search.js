import React, { Component } from "react";
import API from "../utils/API";
import { BookList, GoogleBookListItem } from "../components/BookList";

// in state we hold the array of books that are populated from the api call to google books, the title the user is searching for
class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    // this.loadBooks();
    console.log("I have rendered the Search Page");
  }

  // call the api to get all the books with this title
  // this is a clientside call to google books
  loadBooks = () => {
    API.getBooks(this.state.title)
      .then(res => {
        console.log("data is: " + JSON.stringify(res.data));
        // this.setState({ books: res.data[0], title: "", author: "", synopsis: "" })
        console.log("the data is length: " + res.data.items.length);
        console.log("the first title: " + res.data.items[0].volumeInfo.title);
        let localBooks = [];

        // lets map the info
        res.data.items.map(item => {
          console.log("the  id: " + item.id);
          console.log("the  title: " + item.volumeInfo.title);
          console.log("the  authors: " + item.volumeInfo.authors.length);
          console.log("the  description: " + item.volumeInfo.description);
          console.log("the  summary: " + item.searchInfo.textSnippet);
          console.log("the  url: " + item.volumeInfo.infoLink);
          console.log("the  image: " + item.volumeInfo.imageLinks.thumbnail);
          let book = {};
          book.id = item.id;
          book.title = item.volumeInfo.title;
          book.authors = item.volumeInfo.authors;
          book.description = item.volumeInfo.description;
          book.summary = item.searchInfo.textSnippet;
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

  console.log("saved!!! " + newBook.title);

  API.saveBook({
    book: newBook
  })
    .then( 
      //HLS when a book has been saved what do you want to do?
      )
    .catch(err => console.log(err));

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
      <div>
        <form>
          <div className="form-group">
            <label >Book:</label>
            <input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title of Book (required)"
            />
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
