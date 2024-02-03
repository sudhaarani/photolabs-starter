import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, click }) => {
  return (
    <div className='fav-badge' onClick={() => click()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  )
};

export default FavBadge;