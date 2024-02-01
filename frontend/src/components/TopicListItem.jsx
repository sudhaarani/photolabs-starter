import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({ key, title }) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="hover">{title}</span>
    </div>
  );
};

export default TopicListItem;
