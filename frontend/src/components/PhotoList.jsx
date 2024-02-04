import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  //console.log("PhotoList:", props.photos);
  const { favPhotos, favPhotosClick, handleModalVisibility, setDisplayModal, photos } = props;

  const photoListArray = photos.map((photoList) => {
    return (<PhotoListItem key={photoList.id}
      id={photoList.id}
      location={photoList.location}
      imageSource={photoList.urls.regular}
      username={photoList.user.name}
      profile={photoList.user.profile}
      favPhotos={favPhotos}
      favPhotosClick={favPhotosClick}
      handleModalVisibility={handleModalVisibility}
      setDisplayModal={setDisplayModal}
    />)
  }
  );

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
