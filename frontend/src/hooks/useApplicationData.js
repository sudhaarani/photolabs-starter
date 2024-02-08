import { useReducer, useEffect } from 'react';

const useApplicationData = () => {

  //setting initial states
  const stateDeclare = {
    favPhotos: [],
    displayModal: false,
    selectedPhoto: null,
    photos: [],
    topics: []
  }

  const ACTIONS = {
    SET_FAV_PHOTO: 'SET_FAV_PHOTO',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_MODAL: 'DISPLAY_MODAL',
    GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_FAV_PHOTO:
        return { ...state, favPhotos: action.result }
      case ACTIONS.SELECT_PHOTO:
        return { ...state, selectedPhoto: action.result }
      case ACTIONS.DISPLAY_MODAL:
        return { ...state, displayModal: action.result }
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photos: action.result }
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topics: action.result }
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photos: action.result }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, stateDeclare);

  //used to update the array of favPhoto that are added to Favorites using input id.
  const favorite = (id) => {
    const favoriteResult = state.favPhotos.includes(id) ? state.favPhotos.filter(_id =>
      _id !== id
    ) : [...state.favPhotos, id]
    dispatch({ type: ACTIONS.SET_FAV_PHOTO, result: favoriteResult });
  }

  //to display the clicked photo in larger size in the modal
  const handleModalPhoto = (id) => {
    const handleModalResult = state.photos.find(photo => photo.id === id)
    dispatch({ type: ACTIONS.SELECT_PHOTO, result: handleModalResult });
  }

  //to make display and close the modal
  const setDisplayModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, result: !state.displayModal });
  }

  //useEffect make this API requests to run once after the component renders for the first time
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, result: data });
      })
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json()
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, result: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      })
  }, []);

  //to display photos based on selected topic in the navigation bar
  const getTopicId = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json()
      })
      .then(data => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, result: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      })
  }

  return {
    state, favorite, handleModalPhoto, setDisplayModal, getTopicId
  };
}

export default useApplicationData;
