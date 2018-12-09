import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = (this.imageRef.current.clientHeight);
    const width = (this.imageRef.current.clientWidth);

    const spans = Math.ceil(height / 10);

    this.setState({ spans });

    console.log(this.state.spans);

    console.log('ini tinggi', height);
    console.log('ini lebar', width);
  }

  render() {
    const { description, urls } = this.props.gambar;
    const { regular } = urls;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard;