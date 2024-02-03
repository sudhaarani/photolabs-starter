import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title }) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="hover">{title}</span>
    </div>
  );
};

export default TopicListItem;
