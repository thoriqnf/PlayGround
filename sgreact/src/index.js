import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Thoriq" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))