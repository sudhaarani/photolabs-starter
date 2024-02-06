import React from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favPhotos, displayModal, setDisplayModal, selectedPhoto,
    favorite, handleModal
  } = useApplicationData();

  // const photos = new Array(3).fill(
  //   <PhotoListItem key={sampleDataForPhotoListItem.id}
  //     location={sampleDataForPhotoListItem.location}
  //       imageSource={sampleDataForPhotoListItem.imageSource}
  //       username={sampleDataForPhotoListItem.username}
  //       profile={sampleDataForPhotoListItem.profile}
  //     />)
  console.log("app: topics from array", topics);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favPhotos={favPhotos} favPhotosClick={favorite}
        isFavPhotoExist={favPhotos.length > 0 ? true : false}
        handleModalVisibility={handleModal} setDisplayModal={setDisplayModal} />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} selectedPhoto={selectedPhoto}
        favPhotos={favPhotos} favPhotosClick={favorite} />}
    </div>
  );
};

export default App;
