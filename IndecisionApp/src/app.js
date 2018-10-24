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

var templateTwo = (
  <div>
    <h1>Thoriq</h1>
    <p>Age: 23</p>
    <p>Location: Depok</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);