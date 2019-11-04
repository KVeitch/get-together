import React from 'react';

export const ImageList = ({ images }) => {
  const imageList = images.map(url => (
    <img src={url} alt='sites to see together' />
  ));

  return (
    <section className='section__images'>
      <h3>Sites to see together!</h3>
      {imageList}
    </section>
  );
};

export default ImageList;
