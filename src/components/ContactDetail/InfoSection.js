import React from 'react';

import './InfoSection.css';

const InfoSection = ({ title, mainVal, optVal }) => {
  return (
    <div className='Info'>
      <h3 className='Info__title'>{title}: </h3>
      <div className='Info__detail'>
        <span className='Info__detail--main'>{mainVal}</span>
        {optVal ? <span className='Info__detail--optional'>{optVal}</span> : ''}
      </div>
    </div>
  );
};

export default InfoSection;
