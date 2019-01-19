import React from 'react';

class GoogleAuth extends React.Component {

  state = {
    isSignedIn: null,
  };

  componentWillMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '335469372601-l3ajv0l23gc4d9l7d910q908rq0s67sk.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  };
};

export default GoogleAuth;