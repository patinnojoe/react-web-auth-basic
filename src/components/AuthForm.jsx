import { useState } from 'react';
import InputField from './InputField';
import PropTypes from 'prop-types';
import FlatButton from './FlatButton';
import FillButton from './FillButton';
import IconButton from './IconButton';
import { toast } from 'sonner';

function AuthForm({ isLogin = true, handler, authNav }) {
  const [input, setInput] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    name: '',
  });
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    password_confirmation: true,
    username: true,
    name: true,
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const validate = (input) => {
    // Initialize a flag to track whether all fields are valid
    let isFormValid = true;

    // Reset validation state
    setIsValid({
      email: true,
      password: true,
      password_confirmation: true,
      username: true,
      name: true,
    });

    // validate email
    if (input.email.trim() === '' || !input.email.includes('@')) {
      setIsValid((prev) => ({ ...prev, email: false }));
      toast.warning('📩 Please enter a valid email with "@"');
      isFormValid = false;
    }

    // validate name
    if (!isLogin && input.name.trim().length < 5) {
      setIsValid((prev) => ({ ...prev, name: false }));
      toast.warning('😩 Name must be at least 5 characters');
      isFormValid = false;
    }

    // validate password
    if (input.password.trim().length < 7) {
      setIsValid((prev) => ({ ...prev, password: false }));
      toast.warning('🤦‍♂️ Password must be at least 7 characters long');
      isFormValid = false;
    }

    // validate username
    if (!isLogin && (input.username.trim().length < 6 || input.username.trim().length > 15)) {
      setIsValid((prev) => ({ ...prev, username: false }));
      toast.warning('😒 Username must be between 6 and 15 characters');
      isFormValid = false;
    }

    // validate confirm password
    if (!isLogin && input.password.trim() !== input.password_confirmation.trim()) {
      setIsValid((prev) => ({ ...prev, confirmPassord: false }));
      toast.warning('🤷‍♂️ Password and Confirm Password do not match');
      isFormValid = false;
    }

    // If any validation failed, return early
    if (!isFormValid) return;

    // If all validations pass, send data to handler
    return handler(input);
  };

  let header = isLogin ? 'Welcome Back' : 'Start Your Journey';
  let subHeader = isLogin ? 'Login to your account' : 'Create your free account';

  return (
    <section className="wrapper">
      <div className="inner">
        <header className="auth_container-details-header">
          <h1> {header} </h1>
          <p> {subHeader} </p>
        </header>

        <div className="auth_cotainer-details-inputs">
          {isLogin ? (
            ' '
          ) : (
            <InputField
              icon="person"
              onChange={handleInputs}
              value={input.name}
              name="name"
              placeholder="Full Name"
              inputType="text"
              isValid={isValid.name}
            />
          )}

          <InputField
            icon="mail"
            onChange={handleInputs}
            value={input.email}
            name="email"
            placeholder="Email"
            inputType="email"
            isValid={isValid.email}
          />

          {isLogin ? (
            ''
          ) : (
            <InputField
              icon="person"
              onChange={handleInputs}
              value={input.username}
              name="username"
              placeholder="Username"
              inputType="text"
              isValid={isValid.username}
            />
          )}
          <InputField
            icon="lock-closed"
            onChange={handleInputs}
            value={input.password}
            name="password"
            placeholder="Password"
            inputType="password"
            isValid={isValid.password}
          />

          {isLogin ? (
            ''
          ) : (
            <InputField
              icon="lock-closed"
              onChange={handleInputs}
              value={input.password_confirmation}
              name="password_confirmation"
              placeholder="Confirm Password"
              inputType="password"
              isValid={isValid.confirmPassord}
            />
          )}
        </div>

        <div className="auth_cotainer-details-buttons">
          <FlatButton
            text={isLogin ? 'Dont have an Account ?' : 'Already have an account?'}
            textColor="#173c2e"
            onClick={authNav}
          />
          <FillButton text={isLogin ? 'Login' : 'Register'} onClick={() => validate(input)} />
        </div>

        <div className="auth_container_loginMethod">
          <p>{isLogin ? 'Sign in with' : 'or signup with'} </p>
          <section>
            <IconButton hasText={true} icon="logo-google" text="Google" />
            <IconButton icon="logo-facebook" hasText={true} text="Facebook" textColor="blue" />
          </section>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;

AuthForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  authNav: PropTypes.func,
};
