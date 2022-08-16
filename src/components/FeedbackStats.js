import PropTypes from "prop-types";
function FeedbackStats({ feedback }) {
  let average = feedback.reduce((previousValue, CurrentValue) => {
    return previousValue + CurrentValue.rate / feedback.length;
  }, 0);

  //get two decimal places
  average = average.toFixed(1);

  return (
    <div className="flex flex-row mt-3 text-red-300">
      <h3 className="flex-1 font-medium">{feedback.length} Reviews</h3>
      <h3 className="font-medium">Average {isNaN(average) ? 0 : average}</h3>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
