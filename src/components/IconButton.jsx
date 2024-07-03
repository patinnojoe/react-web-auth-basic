import IonIcon from '@reacticons/ionicons';
import PropTypes from 'prop-types';

function IconButton({ hasText, icon = 'person', size, text, textColor }) {
  return (
    <button className="iconbtn">
      <IonIcon name={icon} size={size} className="react-ionicon" />
      {hasText && text ? <p style={{ color: { textColor } }}>{text}</p> : ''}
    </button>
  );
}

export default IconButton;
IconButton.propTypes = {
  hasText: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
};
