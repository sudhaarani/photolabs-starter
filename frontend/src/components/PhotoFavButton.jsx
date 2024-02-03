import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favPhotosClick, id }) {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(prev => !prev)
    // if like is true ,add to array

  }

  return (
    <div className="photo-list__fav-icon" onClick={() => {
      handleClick()
      favPhotosClick(id)
    }}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;