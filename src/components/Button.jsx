import PropTypes from 'prop-types';

function Button({ buttonText, onclick }) {
  return (
    <div onClick={onclick} className="primary_button">
      {buttonText}
    </div>
  );
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};
