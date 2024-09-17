import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../pages/Layout';
// import { getDecryptedCookie } from '../utils/cookie';

function ProtectedRoutes() {
  // let user = getDecryptedCookie('user');
  // alert(user.userDetails);
  let userDetail = localStorage.getItem('pas-user');
  let parsedDetail = JSON.parse(userDetail);
  let token = localStorage.getItem('token');
  let isAuthenticated = token !== null ? true : false;
  // check ifthe user detail is in the local storage
  if (!parsedDetail) {
    isAuthenticated = false;
  }
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
