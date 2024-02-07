import { useReducer, useEffect } from 'react';

const useApplicationData = () => {

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
      case ACTIONS.SET_PHOTO_DATA:
        console.log("ACTIONS.SET_PHOTO_DATA:");
        return { ...state, photos: action.result }
      case ACTIONS.SET_TOPIC_DATA:
        console.log("ACTIONS.SET_TOPIC_DATA:");
        return { ...state, topics: action.result }
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        console.log("ACTIONS.GET_PHOTOS_BY_TOPICS:");
        return { ...state, photos: action.result }

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
    console.log("find ::", id, ":::", state.photos.find(photo => photo.id === id))
    const handleModalResult = state.photos.find(photo => photo.id === id)
    dispatch({ type: ACTIONS.SELECT_PHOTO, result: handleModalResult });
  }

  const setDisplayModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, result: !state.displayModal });
  }

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        console.log("data from photos api", data);
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
        console.log("data from topics api", data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, result: data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      })
  }, []);

  const getTopicId = (topic_id) => {
    console.log("inside getTopicId func::", topic_id);
    fetch(`/api/topics/photos/${topic_id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json()
      })
      .then(data => {
        console.log("data from topic_id api", data);
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
