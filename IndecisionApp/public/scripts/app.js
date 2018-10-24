'use strict';

console.log("App.js is running!");

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is come info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var userName = 'Mike';
var age = 27;
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    age
  ),
  React.createElement(
    'p',
    null,
    'Location: Depok'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
