import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      <a href="/2">Navigate to 2</a>
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