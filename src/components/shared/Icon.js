import React from 'react';

import favoriteTrue from '../../assets/fav_star_true/fav_true.png';
import favoriteFalse from '../../assets/fav_star_false/fav_false.png';

import './Icon.css';

const Icon = ({ isFavorite }) => {
  if (isFavorite) {
    return <img  className="Icon" src={favoriteTrue} alt='star true' />;
  } else {
    return <img className="Icon" src={favoriteFalse} alt='star false' />;
  }
};

export default Icon;
