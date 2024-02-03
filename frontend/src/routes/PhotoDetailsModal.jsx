import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton"

const PhotoDetailsModal = ({ setDisplayModal, selectedPhoto, favPhotos, favPhotosClick }) => {
  console.log("PhotoDetailsModal::", favPhotos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setDisplayModal(false) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={selectedPhoto[0].id} favPhotos={favPhotos} favPhotosClick={favPhotosClick} />
        <img className="photo-details-modal__image" src={selectedPhoto[0].urls.full} onClick={() => {
          setDisplayModal(true)
          handleModalVisibility(id)
        }} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto[0].user.profile} />
          <div>
            <p className="photo-details-modal__photographer-info">{selectedPhoto[0].user.name}</p>
            <p className="photo-details-modal__photographer-location">{selectedPhoto[0].location.city}, {selectedPhoto[0].location.country}</p>
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
