import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ key, location, imageSource, profile, username }) => { //instead of props
  /* Insert React */
  // console.log(props.key)
  // console.log(props.location.city)
  return (<div className="photo-list__item">
    <PhotoFavButton/>
    <img src={imageSource} />
    <img src={profile} />
    <p>{username}</p>
    <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
