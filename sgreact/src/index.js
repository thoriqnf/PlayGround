import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const buttonText = { text: 'Click me!' };

  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
