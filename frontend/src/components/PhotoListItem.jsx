import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (<div className ="photo-list__item">
    <img src={props.imageSource} />
    <img src={props.profile} />
    <p>{props.username}</p>
    <p>{props.location.city}, {props.location.country}</p>
    </div>
 )
};

export default PhotoListItem;
