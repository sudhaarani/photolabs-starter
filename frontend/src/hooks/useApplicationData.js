import { useReducer } from 'react';
import photos from "../mocks/photos";

const useApplicationData = () => {

  const stateDeclare = {
    favPhotos: [],
    displayModal: false,
    selectedPhoto: null
  }

  const ACTIONS = {
    SET_FAV_PHOTO: 'SET_FAV_PHOTO',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_MODAL: 'DISPLAY_MODAL'
  }

  function reducer(state, action) {
    console.log("reducer::action::", action);
    switch (action.type) {
      case ACTIONS.SET_FAV_PHOTO:
        console.log(" case ACTIONS.SET_FAV_PHOTO:");
        return { ...state, favPhotos: action.result }
      case ACTIONS.SELECT_PHOTO:
        console.log("ACTIONS.SELECT_PHOTO::");
        return { ...state, selectedPhoto: action.result }
      case ACTIONS.DISPLAY_MODAL:
        console.log("ACTIONS.DISPLAY_MODAL:");
        return { ...state, displayModal: action.result }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, stateDeclare);

  const favorite = (id) => {
    console.log("favorite::id::", id);
    const favoriteResult = state.favPhotos.includes(id) ? state.favPhotos.filter(_id =>
      _id !== id
    ) : [...state.favPhotos, id]
    console.log("favorite::result::", favoriteResult);
    dispatch({ type: ACTIONS.SET_FAV_PHOTO, result: favoriteResult });
  }

  const handleModalPhoto = (id) => {
    //setDisplayModal(prev => !prev);
    console.log("find ::", id, ":::", photos.find(photo => photo.id === id))
    const handleModalResult = photos.find(photo => photo.id === id)
    dispatch({ type: ACTIONS.SELECT_PHOTO, result: handleModalResult });
    //setSelectedPhoto(photos.find(photo => photo.id === id))
  }

  const setDisplayModal = () => {
    if (state.displayModal === false) {
      dispatch({ type: ACTIONS.DISPLAY_MODAL, result: true });
    } else {
      dispatch({ type: ACTIONS.DISPLAY_MODAL, result: false });
    }
  }

  return {
    reducer, ACTIONS, state, favorite, handleModalPhoto, setDisplayModal
  };
}

export default useApplicationData;
