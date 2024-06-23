import { useContext, useState } from 'react';
import InputField from '../../components/InputField';
import './authentication.css';
import Button from '../../components/Button';
import { login } from '../../utils/auth';
import { Authcontext } from '../../store/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const authContext = useContext(Authcontext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    let email = loginDetails.email.trim();
    let password = loginDetails.password.trim();

    if (!email.includes('@') || email === '' || password.length < 6 || password === '') {
      alert('Fill form correctly');
      return;
    }
    try {
      const response = await login(email, password);
      authContext.authenticate(response.token);
      authContext.setUserDetails({ email: response.email, name: 'user' });
      navigate('/');
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="auth_container">
      <div className="auth_container-inner">
        <h3 className="header">Sign in</h3>
        <p className="sub-header">Lets Get started creating Magic</p>
        <div>
          <InputField
            labelText="User Email"
            inputType="email"
            placeholder="enter email address"
            inputName="email"
            value={loginDetails.email}
            onchangeFunc={handleInput}
          />

          <InputField
            labelText="Password"
            inputType="text"
            placeholder="enter password"
            inputName="password"
            onchangeFunc={handleInput}
            value={loginDetails.password}
          />

          <div className="button_container">
            <Button buttonText="Login" onclick={submitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
