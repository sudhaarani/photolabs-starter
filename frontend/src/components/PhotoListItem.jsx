import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import Skeleton from '@mui/material/Skeleton';
import Typography, { TypographyProps } from '@mui/material/Typography';
const PhotoListItem = ({ photoList, state, favPhotosClick,
  handleModalVisibility, setDisplayModal }) => { //instead of props
  /* Insert React */
  const { id, location, urls, user } = photoList;

  return (<div className="photo-list__item">

    {state.loading ? (
      <Skeleton variant="rectangular" width="300px" height="200px" />
    ) : (<>
      <PhotoFavButton id={id} favPhotos={state.favPhotos} favPhotosClick={favPhotosClick} />
      <img className={state.displayModal ? "photo-list__modal_image" : "photo-list__image"} src={urls.regular} onClick={() => {
        setDisplayModal()
        handleModalVisibility(id)
      }} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <div>
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </>
    )}
  </div>
  )
};

export default PhotoListItem;
