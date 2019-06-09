import React, { Component } from "react";

class Saved extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
    console.log("I have rendered the Saved page");
  }

  render() {
    return (
        <h1>I'm saved</h1>
    );
  }
}

export default Saved;
