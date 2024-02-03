import React from 'react';
import TopicList from './TopicList';
import FavBadge from "./FavBadge";
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, favPhotos, isFavPhotoExist }) => {

  // console.log("TopNavigation: topics from props", topics);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;