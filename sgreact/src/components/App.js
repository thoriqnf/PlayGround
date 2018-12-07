import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const responze = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 42d520b941b51296907e355d942b7efdb08318788891422015e8b686d33c0324'
      }
    });
    console.log(this);
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