import IonIcon from '@reacticons/ionicons';
import PropTypes from 'prop-types';

function InputField({
  icon,
  size = 'large',
  inputType = 'text',
  placeholder = 'Enter value',
  value,
  name,
  id,
  onChange,
}) {
  return (
    <div className="inputfield_container">
      <IonIcon name={icon} size={size} className="react-ionicon" />
      <input type={inputType} name={name} placeholder={placeholder} value={value} id={id} onChange={onChange} />
    </div>
  );
}

export default InputField;

InputField.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
