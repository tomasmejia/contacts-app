import React from 'react';

import './Image.css';
import placeholderLarge from '../../assets/user_L/user_3x.png';
import placeholderSmall from '../../assets/user_S/user_2x.png';

const Image = ({ src, alt, isSmall }) => {
  return (
    <img
      className={isSmall ? 'Image--small' : 'Image--large'}
      src={src}
      alt={alt}
      onError={e => {
        e.target.onerror = null;
        e.target.src = isSmall ? placeholderSmall : placeholderLarge;
      }}
    />
  );
};

export default Image;
