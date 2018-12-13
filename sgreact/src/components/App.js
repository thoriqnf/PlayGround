import React from 'react';
import PostList from './PostList';
import UserList from './UserList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
      <UserList />
    </div>
  );
}

export default App;