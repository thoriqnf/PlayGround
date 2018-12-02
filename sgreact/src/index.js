import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplays from './SeasonDisplay';

const App = () => {
  return (
    <div>
      <SeasonDisplays />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);