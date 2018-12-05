import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentWillMount() {
    console.log('willmount', this.state.lat);
  }
  componentDidMount() {
    console.log('Mount', this.state.lat);
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('Updated', this.state.lat);
  }

  componentWillUnmount() {
    clearInterval(this.state.lat);
    console.log('Unmount', this.state.lat);
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      )
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      )
    }

    return <div>Loading cuy!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);