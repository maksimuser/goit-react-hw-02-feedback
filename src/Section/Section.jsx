import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="container">
    <h1 className="title"> {title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
