import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the books
export function BookListItem({
  book
}) {
  return (
    <li className="list-group-item" key={book.id}>
      <Container>
        <Row>
         <Col size="xs-4 sm-10">
         <h3>{book.title}</h3>
         {book.authors.length===1 ? 
         (  <p>Author: {book.authors}</p>) 
         : (<p>Authors: {book.authors}</p>)
        }
         <p>{book.summary}</p>
         </Col>

          <Col size="xs-4 sm-2">
            <a type="button" class="btn btn-outline-success" target="_blank" href={book.url}>View</a>
            <button type="button" class="btn btn-primary">Save</button>
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