import { useContext } from 'react';
import AuthForm from './AuthForm';
import { AuthContext } from '../store/AuthContex';
import { login } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
// import { setEncryptedCookie } from '../utils/cookie';

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

      localStorage.setItem('token', JSON.stringify(res.data.idToken));
      // setEncryptedCookie('user', userDetails);
      console.log(userDetails);
      navigate('/');
    } catch (error) {
      // Todo Add UI for this
      alert('Something went wrong, verify login credentials');
      console.log(error);
    }
  };
  return <AuthForm isLogin={true} handler={handleLogin} />;
}

export default Login;
