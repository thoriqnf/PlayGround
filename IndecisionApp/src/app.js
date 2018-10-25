console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Thoriq a great developer'
}

// JSX - Javascript XML
var template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
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
  location: 'Depok',
}

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);