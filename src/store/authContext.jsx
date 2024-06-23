import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// basic structure of the context API
export const Authcontext = createContext({
  userDetails: {},
  userToken: '',
  isLoggedIn: false,
  logout: () => {},
  authenticate: () => {},
  setUserDetails: () => {},
});

function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState();
  const [userDetails, setUserDetails] = useState({
    password: '',
    email: '',
    name: '',
  });

  const authenticate = (token) => {
    setUserToken(token);
  };
  const logout = () => {
    setUserToken(null);
    setUserDetails({});
  };
  const setUserDetailsFunc = (details) => {
    setUserDetails(details);
  };
  const values = {
    email: '',
    userToken: userToken,
    isLoggedIn: !!userToken,
    authenticate: authenticate,
    logout: logout,
    setUserDetails: setUserDetailsFunc,
    userDetails: userDetails,
  };

  return <Authcontext.Provider value={values}>{children}</Authcontext.Provider>;
}

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
