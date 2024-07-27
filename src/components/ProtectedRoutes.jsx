import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../pages/Layout';
// import { getDecryptedCookie } from '../utils/cookie';

function ProtectedRoutes() {
  // let user = getDecryptedCookie('user');
  // alert(user.userDetails);

  let token = localStorage.getItem('token');
  const isAuthenticated = token !== null ? true : false;
  // const isAuthenticated = true;
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutes;
