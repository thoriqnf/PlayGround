import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const ListGambar = props.images.map(({ description, id, urls }) => {
    return (
      <img key={id} alt={description} src={urls.regular} />
    )
  });

  return <div className="image-list">{ListGambar}</div>
}

export default ImageList;