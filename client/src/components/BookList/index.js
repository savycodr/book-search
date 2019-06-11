import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";
import "./style.css";


// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the books
// passing in the Book from google
// and the function to attatch to the save button
export function GoogleBookListItem({
  book, saveBook
}) {
  return (

    <li className="list-group-item" key={book.googleId}>
    
      <Container>
        <Row>
         <Col size="xs-4 sm-9">
         <h3>{book.title}</h3>
         {book.authors.length===1 ? 
         (  <p>Author: {book.authors}</p>) 
         : (<p>Authors: {book.authors}</p>)
        }
         <p>{book.summary}</p>
         </Col>

          <Col size="xs-4 sm-3">
            <a type="button" rel="noreferrer noopener" className="btn btn-outline-success btn-space" target="_blank" href={book.url}>View</a> 
            <button type="button" className="btn btn-primary" onClick={saveBook}>Save</button>
          </Col>
        </Row>

        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={book.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <p>{book.description}</p>
          </Col>
        </Row>
      </Container>
    </li>

  );}


// BookListItem renders a bootstrap list item containing data from the books
// passing in the Book, whether it is a list from google or from the database 
// and the function to attatch to the button
// delete if list comes from the database, save if list comes from the Google api
export function BookListItem({
  book,  deleteBook
}) {
  return (

    <li className="list-group-item" key={book._id}>
    
      <Container>
        <Row>
         <Col size="xs-4 sm-9">
         <h3>{book.title}</h3>
         {book.authors.length===1 ? 
         (  <p>Author: {book.authors}</p>) 
         : (<p>Authors: {book.authors}</p>)
        }
         <p>{book.summary}</p>
         </Col>

          <Col size="xs-4 sm-3">
            <a type="button" rel="noreferrer noopener" className="btn btn-outline-success  btn-space" target="_blank" href={book.url}>View</a>
            <button type="button" className="btn btn-danger" onClick={deleteBook}>Delete</button>
          </Col>
        </Row>

        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={book.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <p>{book.description}</p>
          </Col>
        </Row>
      </Container>
    </li>

  );
}
