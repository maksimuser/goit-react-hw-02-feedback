import PropTypes from 'prop-types';
const Notification = ({ text }) => <p>{text}</p>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
