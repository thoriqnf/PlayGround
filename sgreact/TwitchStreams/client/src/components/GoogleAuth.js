import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentWillMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '335469372601-l3ajv0l23gc4d9l7d910q908rq0s67sk.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>
    } else {
      return <div>I am not signed in!</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  };
};

export default GoogleAuth;