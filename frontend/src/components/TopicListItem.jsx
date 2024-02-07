import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, id, getTopicId }) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="hover" onClick={() => getTopicId(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
