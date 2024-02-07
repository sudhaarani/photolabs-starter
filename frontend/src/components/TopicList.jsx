import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  // console.log(props)
  // console.log("props.topics:", props.topics)
  const topicListArray = props.topics.map((topicList) => {
    return (<TopicListItem key={topicList.id}
      title={topicList.title} id={topicList.id} getTopicId={props.getTopicId}
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
