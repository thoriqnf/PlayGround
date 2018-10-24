console.log("App.js is running!");


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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);