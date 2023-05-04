import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', 'success');
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower Case', 'success')

  };
  
  const handleClear = () => {
    setText("");
    props.showAlert('Text Cleared', 'success')

  };

  return (
    <>
      <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'rgb(36 74 104)', color: props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear} disabled={text.length===0}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
          <h1>Your Text Summary</h1>
          <p> {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters </p>
          <p> {0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes read </p>
          <h2> Preview</h2>
          <p>{text.length === 0? 'Enter Something to get a preview' : text}</p>
      </div>
    </>
  );
}
