import React from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state, setDisplayModal, getTopicId,
    favorite, handleModalPhoto
  } = useApplicationData();

  console.log("app: topics from array", state.topics);
  console.log("app: photos from array", state.photos);

  return (
    <div className="App">
      <HomeRoute photos={state.photos} topics={state.topics} favPhotos={state.favPhotos} favPhotosClick={favorite}
        isFavPhotoExist={state.favPhotos.length > 0 ? true : false} getTopicId={getTopicId}
        handleModalVisibility={handleModalPhoto} setDisplayModal={setDisplayModal} />
      {state.displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} selectedPhoto={state.selectedPhoto}
        favPhotos={state.favPhotos} favPhotosClick={favorite} />}
    </div>
  );
};

export default App;
