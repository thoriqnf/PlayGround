import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.gambar;
    const { regular } = urls;
    return (
      <div>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard;