import { useState } from 'react';
import InputField from './InputField';
import PropTypes from 'prop-types';
import FlatButton from './FlatButton';
import FillButton from './FillButton';
import IconButton from './IconButton';

function AuthForm({ isLogin = true, handler, authNav }) {
  const [input, setInput] = useState({
    email: '',
    password: '',
    comfirmPassword: '',
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let header = isLogin ? 'Welcome Back' : 'start Your Journey';
  let subHeader = isLogin ? 'Login to your account' : 'Create your free account';

  return (
    <section className="wrapper">
      <div className="inner">
        <header className="auth_container-details-header">
          <h1> {header} </h1>
          <p> {subHeader} </p>
        </header>

        <div className="auth_cotainer-details-inputs">
          <InputField
            icon="person"
            onChange={handleInputs}
            value={input.email}
            name="email"
            placeholder="Email"
            inputType="email"
          />
          <InputField
            icon="lock-closed"
            onChange={handleInputs}
            value={input.password}
            name="password"
            placeholder="Password"
            inputType="password"
          />

          {isLogin ? (
            ''
          ) : (
            <InputField
              icon="lock-closed"
              onChange={handleInputs}
              value={input.comfirmPassword}
              name="comfirmPassword"
              placeholder="Confirm Password"
              inputType="password"
            />
          )}
        </div>

        <div className="auth_cotainer-details-buttons">
          <FlatButton
            text={isLogin ? 'Dont have an Account ?' : 'Already have an account?'}
            textColor="#173c2e"
            onClick={authNav}
          />
          <FillButton text={isLogin ? 'Login' : 'Register'} onClick={() => handler(input)} />
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
