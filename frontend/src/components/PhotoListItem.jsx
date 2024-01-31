import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (<>
    <img src={props.imageSource} />
    <img src={props.profile} />
    <p>{props.username}</p>
    <p>{props.location.city}, {props.location.country}</p>
    </>
 )
};

export default PhotoListItem;
