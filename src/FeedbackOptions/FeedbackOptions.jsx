import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={styles.FeedbackOptions}>
    <button
      className={styles.FeedbackOptions__btn}
      type="button"
      onClick={onLeaveFeedback.goodFeedback}
    >
      Good
    </button>
    <button
      className={styles.FeedbackOptions__btn}
      type="button"
      onClick={onLeaveFeedback.neutralFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.FeedbackOptions__btn}
      type="button"
      onClick={onLeaveFeedback.badFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    goodFeedback: PropTypes.func.isRequired,
    neutralFeedback: PropTypes.func.isRequired,
    badFeedback: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
