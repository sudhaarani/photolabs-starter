import React from 'react';
import TopicList from './TopicList';
import FavBadge from "./FavBadge";
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ state, isFavPhotoExist, getTopicId }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={state.topics} getTopicId={getTopicId} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;