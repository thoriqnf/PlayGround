'use strict';

console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Thoriq a great developer'

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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
  citacita: 'Developer handal'
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Cita-cita: ',
    user.citacita
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
