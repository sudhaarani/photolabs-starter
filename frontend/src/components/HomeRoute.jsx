import React from "react";
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({ photos, topics, favPhotos, favPhotosClick, isFavPhotoExist, setDisplayModal,
  handleModalVisibility }) => {
  //console.log("home route: topics from props::", topics);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} favPhotos={favPhotos} favPhotosClick={favPhotosClick}
        setDisplayModal={setDisplayModal}
        handleModalVisibility={handleModalVisibility} />
    </div>
  );
}

export default HomeRoute;