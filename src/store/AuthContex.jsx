import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({
  userDetails: undefined,
  authenticate: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export default function AuthContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(undefined);

  const authenticate = (userDetails) => {
    return setUserDetails(userDetails);
  };
  const logout = () => {
    return setUserDetails(undefined);
  };

  const values = {
    userDetails,
    authenticate,
    logout,
    isLoggedIn: !!userDetails,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
