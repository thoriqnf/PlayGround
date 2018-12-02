import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplays from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

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