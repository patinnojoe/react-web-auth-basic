import { useContext } from 'react';
import { register } from '../utils/Auth';
import AuthForm from './AuthForm';
import { AuthContext } from '../store/AuthContex';
import { useNavigate } from 'react-router-dom';

import { TabContext } from '../store/TabContext';
import { toast } from 'sonner';

export default function Register() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const tabContext = useContext(TabContext);

  const handleTab = () => {
    tabContext.setActiveIndex(0);
  };
  const handlerRegistration = async (input) => {
    try {
      const res = await register(input.email, input.password, input.password_confirmation, input.username, input.name);
      console.log(res.data);
      const userDetails = {
        email: res.data.data.user.email,
        username: res.data.data.user.username,
        name: res.data.data.user.name,
        token: res.data.data.token,
        userId: res.data.data.user_id,
      };
      authContext.authenticate(userDetails);
      // store cookie

      localStorage.setItem('token', JSON.stringify(res.data.data.token));
      localStorage.setItem('pas-user', JSON.stringify(userDetails));
      toast.success('👌 Registraion successful !');
      // redirect to home
      navigate('/');
    } catch (error) {
      console.log(error);

      toast.error('😢 Something went wrong, check details pleas try again');
    }
  };
  return <AuthForm isLogin={false} handler={handlerRegistration} authNav={handleTab} />;
}
