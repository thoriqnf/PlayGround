import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.gambar;
    const { regular } = urls;
    return (
      <div>
        <img src={regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard;