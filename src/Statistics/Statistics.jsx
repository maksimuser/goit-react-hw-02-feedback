import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.Feedback__items}>
      {total > 0 ? (
        <>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification text="No feedback given" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
