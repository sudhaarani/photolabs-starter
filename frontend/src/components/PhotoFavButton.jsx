import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ setFavPhotos, id }) {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(prev => !prev)
    // if like is true ,add to array
    setFavPhotos(prev => {
      console.log("like:", like)
      console.log("prev:", prev)
      return !like ? [...prev, id] : prev.filter(_id =>
        _id !== id
      )
    })
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={like} />
      </div>
    </div>
  );
}

export default PhotoFavButton;