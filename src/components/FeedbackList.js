import React from "react";
import FeedbackOne from "./FeedbackOne";
function FeedbackList({ feedback, removeItems }) {
  if (feedback.length === 0)
    return <div className="text-center mt-4 text-2xl">No rating feedback...  :/</div>

  return (
    <div>
      {feedback.map((item, index) => (
        <FeedbackOne
          key={item.id}
          rate={item.rate}
          comment={item.comment}
          id={item.id}
          removeItem={removeItems}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
