import React, { useState } from "react";


export default function TextForm(props) {
    const handleOnUppercase = () => {
        setText(text.toUpperCase());
    };
    const handleOnLowercase = () => {
        setText(text.toLowerCase());
    };
    // const handleOnInverseCase = () => {
    //     setText(text.);
    //     for (i = 0; i < text.length; i++) {
    //         text.at(i).to
    //     }
    // };
    const handleOnClearText = () => {
        setText("");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-1">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2 mt-2" onClick={handleOnUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleOnLowercase}>Convert to Lowercase</button>
            {/* <button className="btn btn-primary mx-2 mt-2" onClick={handleOnInverseCase}>Inverse case</button> */}
            <button className="btn btn-primary ms-2 mt-2" onClick={handleOnClearText}>Clear Text</button>
            <h2 className="mt-4">Text Summary</h2>
            <p> {text.length} characters | {text.split(" ").length} words | {text.split(". ").length} sentences </p>
            <h2 className="mt-4">Preview</h2>
            <p> {text} </p>
        </>
    );
}