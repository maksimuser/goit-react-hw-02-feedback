import PropTypes from 'prop-types';
const FeedbackOptions = ({
  onLeaveFeedback: { goodFeedback, neutralFeedback, badFeedback },
}) => {
  // console.log(onLeaveFeedback);
  return (
    <div className="controls">
      <button type="button" onClick={goodFeedback}>
        Good
      </button>
      <button type="button" onClick={neutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={badFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    goodFeedback: PropTypes.func.isRequired,
    neutralFeedback: PropTypes.func.isRequired,
    badFeedback: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
