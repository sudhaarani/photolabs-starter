import React from 'react';
import TopicList from './TopicList';
import FavBadge from "./FavBadge";
import '../styles/TopNavigationBar.scss';
import Skeleton from '@mui/material/Skeleton';

const TopNavigation = ({ state, isFavPhotoExist, getTopicId }) => {

  return (
    <div className="top-nav-bar">
      {state.loading ? (
        <Skeleton variant="rectangular" width="1500px" height="72px" />
      ) : (
        <>
          <span className="top-nav-bar__logo">PhotoLabs</span>
          <TopicList state={state} getTopicId={getTopicId} />
          <FavBadge isFavPhotoExist={isFavPhotoExist} />

        </>
      )}
    </div>
  )
}

export default TopNavigation;