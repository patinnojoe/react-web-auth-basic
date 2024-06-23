import PropTypes from 'prop-types';

function InputField({ labelText, inputName, placeholder, inputType, onchangeFunc, value }) {
  return (
    <div className="inputfiled_container">
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onchangeFunc}
      />
    </div>
  );
}

export default InputField;
InputField.propTypes = {
  labelText: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  onchangeFunc: PropTypes.func,
};
