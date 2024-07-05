import { useContext } from 'react';
import { register } from '../utils/Auth';
import AuthForm from './AuthForm';
import { AuthContext } from '../store/AuthContex';
import { useNavigate } from 'react-router-dom';
import { setEncryptedCookie } from '../utils/cookie';

export default function Register() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const handlerRegistration = async (input) => {
    try {
      const res = await register(input.email, input.password);
      const userDetails = {
        email: res.data.email,
        token: res.data.idToken,
      };
      authContext.authenticate(userDetails);
      // store cookie
      setEncryptedCookie('user', userDetails);
      // redirect to home
      navigate('/');
    } catch (error) {
      console.log(error);
      // TODO add ui for this
      alert('Something went wrong, try again later');
    }
  };
  return <AuthForm isLogin={false} handler={handlerRegistration} />;
}
