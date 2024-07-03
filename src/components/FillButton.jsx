import PropTypes from 'prop-types';

function FillButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="fillbtn">
      {text}
    </button>
  );
}
export default FillButton;
FillButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
