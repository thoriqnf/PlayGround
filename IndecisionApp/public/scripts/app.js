'use strict';

console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Thoriq a great developer',
  option: ['One', 'Two']

  // JSX - Javascript XML
}; var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.title && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.option.length > 0 ? 'Here are your opsi' : 'No option'
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

var user = {
  name: 'thoriq',
  age: 23,
  location: 'Depok'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    ' ',
    user.age,
    ' '
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
