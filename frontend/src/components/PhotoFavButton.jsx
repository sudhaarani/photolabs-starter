import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favPhotosClick, favPhotos, id }) {

  return (
    <div className="photo-list__fav-icon" onClick={() => {
      favPhotosClick(id)
    }}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={favPhotos.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;