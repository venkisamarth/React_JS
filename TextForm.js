import  React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value); // Corrected typo
  };

  const [text, setText] = useState('Enter text here'); // Fixed initial text typo

  return (
    <div>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} // Corrected typo
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}

