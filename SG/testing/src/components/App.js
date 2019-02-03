import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-router';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default class App extends Component {

  renderButton() {
    if (this.props.auth) {
      return (
        <button>
          Sign Out
        </button>
      )
    } else {
      return (
        <button>
          Sign In
          </button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div >
    );
  }
};