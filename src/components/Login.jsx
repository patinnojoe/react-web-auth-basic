import { useContext } from 'react';
import AuthForm from './AuthForm';
import { AuthContext } from '../store/AuthContex';
import { login } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { TabContext } from '../store/TabContext';
import { toast } from 'sonner';

// import { setEncryptedCookie } from '../utils/cookie';

function Login() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const tabContext = useContext(TabContext);
  const handleTab = () => {
    tabContext.setActiveIndex(1);
  };
  const handleLogin = async (input) => {
    try {
      const res = await login(input.email, input.password);

      console.log(res.data.data);

      const userDetails = {
        email: res.data.data.user.email,
        username: res.data.data.user.username,
        name: res.data.data.user.name,
        token: res.data.data.token,
        userId: res.data.data.user_id,
      };

      console.log('Registered user', userDetails);
      authContext.authenticate(userDetails);
      // store item in browser cookie

      localStorage.setItem('token', JSON.stringify(res.data.data.token));
      localStorage.setItem('pas-user', JSON.stringify(userDetails));

      // setEncryptedCookie('user', userDetails);
      console.log(userDetails);
      toast.success('😎 Lets get to work!');
      navigate('/');
    } catch (error) {
      // Todo Add UI for this
      // alert('Something went wrong, verify login credentials');
      console.log(error);
      toast.error('😢 Something went wrong, pleas try again');
    }
  };
  return <AuthForm isLogin={true} handler={handleLogin} authNav={handleTab} />;
}

export default Login;
