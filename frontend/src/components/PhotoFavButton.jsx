import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favPhotosClick, favPhotos, id }) {
  // const [like, setLike] = useState(false);
  // const handleClick = () => {
  //   setLike(prev => !prev)
  //   // if like is true ,add to array
  // }
  // console.log("like status::", like)

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