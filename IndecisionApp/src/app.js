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
var templateTwo = (
  <div>
    <h1>{userName + '!'}</h1>
    <p>Age: {age}</p>
    <p>Location: Depok</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);