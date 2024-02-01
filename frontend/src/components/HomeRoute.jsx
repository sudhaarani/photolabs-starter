import React from "react";
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';
import TopNavigation from "./TopNavigationBar"

function HomeRoute() {
  return (<div className="home-route">
      <TopNavigation/>
      <PhotoList />
    </div>
  );
}

export default HomeRoute;