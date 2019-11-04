import React from 'react';
import PropTypes from 'prop-types';

export const ImageList = ({ images }) => {
  const imageList = images.map((url, i) => (
    <img src={url} alt="sites to see together" key={i} />
  ));

  return (
    <section className="section__images">
      <h3>Sites to see together!</h3>
      {imageList}
    </section>
  );
};

export default ImageList;

ImageList.propTypes = {
  images: PropTypes.array
};
