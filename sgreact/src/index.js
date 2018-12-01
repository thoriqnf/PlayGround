import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog 1" avatar={faker.image.avatar()} />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="Nice blog 2" avatar={faker.image.avatar()}/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="Nice blog 3" avatar={faker.image.avatar()}/>
      <CommentDetail author="Thoriq" timeAgo="Last week at 0:00AM" content="Nice blog 4" avatar={faker.image.avatar()}/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))