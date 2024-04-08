import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    console.log("lower was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clear = () => {
    console.log("clear was clicked" + text);
    let newtext = " ";
    setText(newtext);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const removeExtraSpaces = () => {
    console.log("remove spaces");
    let newText=text.split(/ [ ] + /);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    console.log("text copy clicked");
    const copyText=document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copyText
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
          remove space
        </button>
        <div className="container my-3">
          <h1>your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} chracters</p>
          <p>{0.08 * text.split(" ").length}minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>

        </div>
      </div>
    </>

  );
}
