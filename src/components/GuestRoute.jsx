import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = false;
function GuestRoute() {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}

export default GuestRoute;
