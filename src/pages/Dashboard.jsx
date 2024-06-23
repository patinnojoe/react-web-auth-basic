import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../store/authContext';
import Button from '../components/Button';

function Dashboard() {
  const authContext = useContext(Authcontext);
  const navigate = useNavigate();
  const routeToProfile = () => {
    navigate('/profile');
  };

  const logout = () => {
    authContext.logout();
  };
  useEffect(() => {
    if (authContext.isLoggedIn !== true) {
      navigate('/login');
    }
  }, [authContext, navigate]);

  return (
    <div className="home">
      <h6>welcome {authContext.userDetails.name}</h6>
      <div>
        <Button buttonText="View Profile" onclick={routeToProfile} />

        <Button buttonText="log out" onclick={logout} />
      </div>
    </div>
  );
}

export default Dashboard;
Dashboard.propTypes = {
  userToken: PropTypes.string,
};
