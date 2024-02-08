import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { favPhotosClick, handleModalVisibility, setDisplayModal, state } = props;

  const photoListArray = state.photos.map((photoList) => {
    return (<PhotoListItem key={photoList.id}
      photoList={photoList}
      state={state}
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
