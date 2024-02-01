import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import HomeRoute from './components/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(
  //   <PhotoListItem key={sampleDataForPhotoListItem.id}
  //     location={sampleDataForPhotoListItem.location}
  //       imageSource={sampleDataForPhotoListItem.imageSource}
  //       username={sampleDataForPhotoListItem.username}
  //       profile={sampleDataForPhotoListItem.profile}
  //     />)

  return (
    <div className="App">
      <HomeRoute/>
    </div>
  );
};

export default App;
