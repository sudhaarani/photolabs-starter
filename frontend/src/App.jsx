import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
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
      <PhotoList />
    </div>
  );
};

export default App;
