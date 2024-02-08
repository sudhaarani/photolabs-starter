import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton"
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ setDisplayModal, state, favPhotosClick }) => {
  const { selectedPhoto } = state;
  const similar_photos = Object.values(selectedPhoto.similar_photos); //returns array
  state = { ...state, photos: similar_photos }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setDisplayModal() }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto &&
        (<div>
          <div className="photo-details-modal__images">
            < PhotoFavButton id={selectedPhoto.id} favPhotos={state.favPhotos} favPhotosClick={favPhotosClick} />
            <img className="photo-details-modal__image" src={selectedPhoto.urls.full} />
            <div className="photo-details-modal__photographer-details">
              <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} />
              <div>
                <p className="photo-details-modal__photographer-info">{selectedPhoto.user.name}</p>
                <p className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
              </div>
            </div>
          </div>
          <div className="photo-details-modal__images">
            <div className='photo-details-modal__header'>Similar Photos</div>
            <div className="photo-details-modal__image">
              <PhotoList state={state} favPhotosClick={favPhotosClick}
              />
            </div>
          </div>
        </div>)}

    </div>
  )
};

export default PhotoDetailsModal;
