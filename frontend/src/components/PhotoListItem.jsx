import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, location, imageSource, profile, username, favPhotos, setFavPhotos }) => { //instead of props
  /* Insert React */
  // console.log(props.key)
  console.log("PhotoListItem")
  return (<div className="photo-list__item">
    <PhotoFavButton id={id} favPhotos={favPhotos} setFavPhotos={setFavPhotos} />
    <img className="photo-list__image" src={imageSource} />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} />
      <div>
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  </div>
  )
};

export default PhotoListItem;
