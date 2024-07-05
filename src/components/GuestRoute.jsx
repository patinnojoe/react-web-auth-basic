import { Navigate, Outlet } from 'react-router-dom';
import { getDecryptedCookie } from '../utils/cookie';

let user = getDecryptedCookie('user');
const isAuthenticated = user ? !!user.token : false;
function GuestRoute() {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}

export default GuestRoute;
