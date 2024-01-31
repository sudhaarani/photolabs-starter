import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  console.log(props.key)
  console.log(props.location.city)
  return (<div className="photo-list__item">
    <PhotoFavButton/>
    <img src={props.imageSource} />
    <img src={props.profile} />
    <p>{props.username}</p>
    <p>{props.location.city}, {props.location.country}</p>
    </div>
 )
};

export default PhotoListItem;
