import { useState } from 'react';
import photos from "../mocks/photos";

const useApplicationData = () => {

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
  return {
    favPhotos, displayModal, setDisplayModal, selectedPhoto,
    favorite, handleModal
  };
}

export default useApplicationData;