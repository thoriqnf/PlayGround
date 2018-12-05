import React from 'react';
import ReactDOM from 'react-dom';

//import SeasonDisplays from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }



  componentDidUpdate() {
    console.log('Updated');
  }

  componentDidMount() {
    console.log('Mount');
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
        <div>
          Latitude: {this.state.lat}
        </div>
      )
    }

    return <div>Loading cuy!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);