console.log("App.js is running!");

// JSX - Javascript XML
var template = (
    <div>
      <h1>Indecision App</h1>
      <p>This is come info</p>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
    </div>
);

var userName ='Mike';
var age = 27;

var user = {
  name: 'thoriq',
  age: 23,
  citacita: 'Developer handal',
}
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Cita-cita: {user.citacita}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);