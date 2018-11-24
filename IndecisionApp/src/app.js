console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Thoriq a great developer',
  option: ['One', 'Two']
}

// JSX - Javascript XML
var template = (
    <div>
      <h1>{app.title}</h1>
    {app.title && <p>{app.subtitle}</p>}
    <p>{app.option.length > 0 ? 'Here are your opsi' : 'No option'}</p>
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
    return <p>Location: {location}</p>;
  } 
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p> {user.age } </p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);