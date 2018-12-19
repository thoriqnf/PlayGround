import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <Link to="/2">Navigate to 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return <div>2</div>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;