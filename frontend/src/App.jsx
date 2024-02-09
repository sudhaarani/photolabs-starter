import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state, setDisplayModal, getTopicId,
    favorite, handleModalPhoto
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute state={state} favPhotosClick={favorite}
        isFavPhotoExist={state.favPhotos.length > 0 ? true : false} getTopicId={getTopicId}
        handleModalVisibility={handleModalPhoto} setDisplayModal={setDisplayModal} />
      {state.displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} state={state}
        favPhotosClick={favorite} />}
    </div>
  );
};

export default App;
