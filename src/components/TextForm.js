import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopyClick = () => {
    let copiedText = document.getElementById("mybox");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    props.showAlert("Copied to Clipboard", "success");

  };

  const handleRemoveSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };




  // State
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <div className="my-3 mx-3"></div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaceClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words and {text.length} characters
        </p>

        <p>{Math.round(0.008 * text.split(" ").length)} Minutes read </p>
        <h2>Your text Preview</h2>
        <p>{text.length > 0 ? text : 'Enter your text to preview it here'}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
