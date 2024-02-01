import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ key, location, imageSource, profile, username }) => { //instead of props
  /* Insert React */
  // console.log(props.key)
  // console.log(props.location.city)
  return (<div className="photo-list__item">
    <PhotoFavButton />
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
