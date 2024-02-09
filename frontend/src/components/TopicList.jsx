import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = ({ state, getTopicId }) => {
  const topicListArray = state.topics.map((topicList) => {
    return (<TopicListItem key={topicList.id}
      title={topicList.title} id={topicList.id} getTopicId={getTopicId}
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
