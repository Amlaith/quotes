import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text"><span class="quote">
          text</span></div>
        <div id="author">- <span class="author">author</span></div>
        <button id="new-quote" class="btn btn-default">New quote</button>
        <div id="share">
          <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=hello">
            <button id="tweet-quote" class="btn btn-default"><i class="fab fa-twitter"></i></button>
          </a>
          <a href="#">
            <button id="tumbrl-quote" class="btn btn-default"><i class="fab fa-facebook"></i></button>
          </a>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Quote />,
  document.getElementById('root')
);
