import React from 'react';

class GoogleAuth extends React.Component {
  componentWillMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '335469372601 - l3ajv0l23gc4d9l7d910q908rq0s67sk.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>
  };
};

export default GoogleAuth;