import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }
  return ComposedComponent;
};


// Imagine we are in commentbox.js 

import requireAuth from 'components/requireAuth';

class CommentBox {

}

export default requireAuth(CommentBox);

import CommentBox from 'components/CommentBox'; 