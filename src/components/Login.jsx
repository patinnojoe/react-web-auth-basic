import { useContext } from 'react';
import AuthForm from './AuthForm';
import { AuthContext } from '../store/AuthContex';
import { login } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { setEncryptedCookie } from '../utils/cookie';

function Login() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (input) => {
    try {
      const res = await login(input.email, input.password);

      const userDetails = {
        email: res.data.email,
        token: res.data.idToken,
      };
      authContext.authenticate(userDetails);
      // store item in browser cookie
      setEncryptedCookie('user', userDetails);
      navigate('/');
    } catch (error) {
      alert('Something went wrong, verify login credentials');
      console.log(error);
    }
  };
  return <AuthForm isLogin={true} handler={handleLogin} />;
}

export default Login;
