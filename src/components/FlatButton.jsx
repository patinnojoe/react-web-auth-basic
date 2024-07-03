import PropTypes from 'prop-types';

function FlatButton({ onClick, text = 'Click me', textColor = 'blue' }) {
  return (
    <button onClick={onClick} style={{ color: textColor }} className="flatbtn">
      {text}
    </button>
  );
}

export default FlatButton;
FlatButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};
