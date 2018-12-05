import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
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

  renderContent() {
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

    return (
      <Spinner message="Please accept location request" />
    );
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()};
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);