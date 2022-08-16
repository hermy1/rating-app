import React from "react";
import FeedbackOne from "./FeedbackOne";
function FeedbackList({ feedback }) {
  if (feedback.length === 0)
    return (
      <FeedbackOne rate={"!"} comment={"No results found"} time={"11:00am"} />
    );

  console.log(feedback.length);
  return (
    <div>
      {feedback.map((item, index) => (
        <FeedbackOne key={item.id} rate={item.rate} comment={item.comment} />
      ))}
    </div>
  );
}

export default FeedbackList;
