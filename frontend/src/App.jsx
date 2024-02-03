import React, { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
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
      <HomeRoute photos={photos} topics={topics} favPhotos={favPhotos} setFavPhotos={setFavPhotos} />
    </div>
  );
};

export default App;
