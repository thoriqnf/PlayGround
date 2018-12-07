import React from 'react';

const ImageList = (props) => {
  const ListGambar = props.images.map(({ description, id, urls }) => {
    return (
      <div key={id}>
        <img alt={description} src={urls.regular} />
      </div>
    )
  });

  return <div>{ListGambar}</div>
}

export default ImageList;