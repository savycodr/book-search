import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Input, FormBtn } from "./components/Form";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


import "./App.css";

function App() {

    return (
      <Router>
      <div className="App">

        <Nav>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Nav>
        <Jumbotron></Jumbotron>
        <form>
          Book
          <Input
            // value={this.state.author}
            // onChange={this.handleInputChange}
            name="book"
            placeholder="Title of Book (required)"
          />
          <FormBtn
          // disabled={!(this.state.author && this.state.title)}
          // onClick={this.handleFormSubmit}
          >
            Submit Book
          </FormBtn>
        </form>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Router>
    );
}

export default App;
