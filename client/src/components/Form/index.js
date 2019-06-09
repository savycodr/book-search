import React from "react";

// This file exports the Input, and FormBtn components

export function Input(props) {
  return (
      <input className="form-control"  
       name="title"
       value={props.title}
       onChange={props.handleInputChange}/>
  );
}

export function FormBtn(props) {
  return (
    <button type="submit" onClick={props.handleFormSubmit}{...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
