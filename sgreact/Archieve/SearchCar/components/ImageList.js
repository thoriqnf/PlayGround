import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const ListGambar = props.images.map(gambar => {
    return (
      <ImageCard key={gambar.id} gambar={gambar} />
    )
  });

  return <div className="image-list">{ListGambar}</div>
}

export default ImageList;