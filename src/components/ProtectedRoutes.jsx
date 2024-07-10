import { Navigate, Outlet } from 'react-router-dom';
import { getDecryptedCookie } from '../utils/cookie';

function ProtectedRoutes() {
  let user = getDecryptedCookie('user');
  const isAuthenticated = user ? !!user.token : false;
  // const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;

