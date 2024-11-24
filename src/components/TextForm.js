import React, { useState } from "react";


export default function TextForm({mode, heading}) {
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
    const handleOnCopyText = () => {
        navigator.clipboard.writeText(text);
    };
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <h2 style={{color: mode==="dark"?"white":"black"}}>{heading}</h2>
            <div className="mb-1">
                <textarea className="form-control" value={text} style={{backgroundColor: mode==="dark"?"#202c33":"white", color: mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2 mt-2" onClick={handleOnUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleOnLowercase}>Convert to Lowercase</button>
            {/* <button className="btn btn-primary mx-2 mt-2" onClick={handleOnInverseCase}>Inverse case</button> */}
            <button className="btn btn-primary mx-2 mt-2" onClick={handleOnClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleOnCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 mt-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <h2 className="mt-4" style={{color: mode==="dark"?"white":"black"}}>Text Summary</h2>
            <p style={{color: mode==="dark"?"white":"black"}}> {text.length} characters | {text.split(" ").length} words | {text.split(". ").length - 1} sentences </p>
            <h2 className="mt-4" style={{color: mode==="dark"?"white":"black"}}>Preview</h2>
            <p style={{color: mode==="dark"?"white":"black"}}> {text.length>0?text:"Enter your text in the text box to preview here"} </p>
        </>
    );
}
