import React from 'react';

class SearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log('input ke klik');
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputChange} onClick={this.onInputClick} />
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;