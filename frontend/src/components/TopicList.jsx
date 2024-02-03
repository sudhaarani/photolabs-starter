import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  // console.log(props)
  // console.log("props.topics:", props.topics)
  const topicListArray = props.topics.map((topicLists) => {
    return (<TopicListItem key={topicLists.id}
      title={topicLists.title}
    />)
  });

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicListArray}
    </div>
  );
};

export default TopicList;
