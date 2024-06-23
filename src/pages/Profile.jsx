// import Login from './AuthenticationPages/Login';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Authcontext } from '../store/authContext';

function Profile() {
  const navigate = useNavigate();
  const authContext = useContext(Authcontext);

  useEffect(() => {
    if (authContext.isLoggedIn !== true) {
      navigate('/login');
    }
  }, [authContext, navigate]);

  return <div>Profile</div>;
}

export default Profile;
Profile.propTypes = {
  userToken: PropTypes.string,
};
