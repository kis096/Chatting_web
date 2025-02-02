import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert('Converted to upper case', 'success');
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    props.showAlert('Converted to lower case', 'success');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  const countWords = (text) => {
    return text.split(' ').filter(element => element.length !== 0).length;
  };

  const wordCount = text.trim() === '' ? 0 : countWords(text);
  const charCount = text.length;
  const readTime = 0.008 * wordCount; // Average reading time is about 125-150 words per minute

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
        </div>

        <div className="container">
          <h1>Your text summary</h1>
          <p>{wordCount} words and {charCount} characters</p>
          <p>{readTime.toFixed(2)} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Enter something in the above box to preview it here'}</p>
        </div>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
};

Textform.defaultProps = {
  heading: 'Enter your text below',
};

