import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" />
      <CommentDetail author="Thoriq" timeAgo="Last week at 0:00AM" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))