import React from "react";
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({ photos, topics, favPhotos, setFavPhotos }) => {
  //console.log("home route: topics from props::", topics);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} />
      <PhotoList photos={photos} favPhotos={favPhotos} setFavPhotos={setFavPhotos} />
    </div>
  );
}

export default HomeRoute;