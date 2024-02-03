import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const favorite = (id) => {
    setFavPhotos(prev => {
      console.log("prev:", prev)
      return prev.includes(id) ? prev.filter(_id =>
        _id !== id
      ) : [...prev, id]
    })
  }

  const handleModal = (id) => {
    //setDisplayModal(prev => !prev);
    console.log("find ::", id, ":::", photos.filter(photo => photo.id === id))
    setSelectedPhoto(photos.filter(photo => photo.id === id))
  }


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
