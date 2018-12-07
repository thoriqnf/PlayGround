import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const responze = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: responze.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Result: {this.state.images.length} images
      </div>
    );
  }
};

export default App;