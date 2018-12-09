import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spansHeight: 0,
      spansWidth: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = (this.imageRef.current.clientHeight);
    const width = (this.imageRef.current.clientWidth);

    const spansHeight = Math.ceil(height / 10);
    const spansWidth = Math.ceil(width / 10);

    this.setState({ spansWidth });
    this.setState({ spansHeight });

    console.log('Ini height', this.state.spansHeight);
    console.log('Ini width', this.state.spansWidth);

  }

  render() {
    const { description, urls } = this.props.gambar;
    const { regular } = urls;
    return (
      <div style={{
        gridRowEnd: `span ${this.state.spansHeight}`
      }}>
        <img ref={this.imageRef} src={regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard;