import React, { useState } from "react";

export default function TextForm({ mode, heading, showAlert }) {
  const handleOnUppercase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "success");
  };
  const handleOnLowercase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success");
  };
  const handleOnInverseCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText = newText + (text.charAt(i).toUpperCase() === text.charAt(i) ? text.charAt(i).toLowerCase() : text.charAt(i).toUpperCase());
    }
    setText(newText);
    showAlert("Case inverted", "success");
  };
  const handleOnCapitalize = () => {
    let temp = text.split(".");
    let newTemp = new Array(temp.length);
    for (let i = 0; i < temp.length; i++) {
      newTemp[i] = temp[i].trim().charAt(0).toUpperCase() + temp[i].trim().slice(1).toLowerCase().split(/[ ]+/).join(" ");
    }
    setText(newTemp.join(". "));
    showAlert("Capitalized text", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces removed", "success");
  };
  const handleOnClearText = () => {
    setText("");
    showAlert("Text cleared", "success");
  };
  const handleOnCopyText = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <h2 style={{ color: mode === "dark" ? "white" : "black" }}>{heading}</h2>
      <div className="mb-1">
        <textarea className="form-control" value={text} style={{ backgroundColor: mode === "dark" ? "#192b3a" : "white", color: mode === "dark" ? "white" : "black" }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary me-2 mt-2" onClick={handleOnUppercase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleOnLowercase}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleOnInverseCase}>Inverse case</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleOnCapitalize}>Capitalize</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleOnClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleOnCopyText}>Copy Text</button>
      <h2 className="mt-4" style={{ color: mode === "dark" ? "white" : "black" }}>Text Summary</h2>
      <p style={{ color: mode === "dark" ? "white" : "black" }}>
        {text.length} characters | {text.split(" ").length} words | {text.split(". ").length - 1} sentences
      </p>
      <h2 className="mt-4" style={{ color: mode === "dark" ? "white" : "black" }}>Preview</h2>
      <p className="p-2 rounded" style={{ color: mode === "dark" ? "white" : "black" , border: ("1px solid #a19f9d")}}>
        <pre className="m-0">{text.length > 0 ? text : "Enter your text in the text box to preview here"}</pre>
      </p>
    </>
  );
}
