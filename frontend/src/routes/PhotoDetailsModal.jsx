import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton"
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ setDisplayModal, selectedPhoto, favPhotos, favPhotosClick }) => {
  console.log("PhotoDetailsModal::", selectedPhoto);
  const similar_photos = Object.values(selectedPhoto[0].similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setDisplayModal(false) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && selectedPhoto.length > 0 &&
        (<div>
          <div className="photo-details-modal__images">
            < PhotoFavButton id={selectedPhoto[0].id} favPhotos={favPhotos} favPhotosClick={favPhotosClick} />
            <img className="photo-details-modal__image" src={selectedPhoto[0].urls.full} />
            <div className="photo-details-modal__photographer-details">
              <img className="photo-details-modal__photographer-profile" src={selectedPhoto[0].user.profile} />
              <div>
                <p className="photo-details-modal__photographer-info">{selectedPhoto[0].user.name}</p>
                <p className="photo-details-modal__photographer-location">{selectedPhoto[0].location.city}, {selectedPhoto[0].location.country}</p>
              </div>
            </div>
          </div>
          <div className="photo-details-modal__images">
            <div className='photo-details-modal__header'>Similar Photos</div>
            <div className="photo-details-modal__image">
              <PhotoList photos={similar_photos} favPhotos={favPhotos} favPhotosClick={favPhotosClick} />
            </div>
          </div>
        </div>)}

    </div>
  )
};

export default PhotoDetailsModal;
