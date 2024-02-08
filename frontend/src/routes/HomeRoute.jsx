import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from "../components/TopNavigationBar"

const HomeRoute = ({ state, favPhotosClick, isFavPhotoExist, setDisplayModal, getTopicId,
  handleModalVisibility }) => {

  return (
    <div className="home-route">
      <TopNavigation state={state} isFavPhotoExist={isFavPhotoExist} getTopicId={getTopicId} />
      <PhotoList state={state} favPhotosClick={favPhotosClick}
        setDisplayModal={setDisplayModal}
        handleModalVisibility={handleModalVisibility} />
    </div>
  );
}

export default HomeRoute;
