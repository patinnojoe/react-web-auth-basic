import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/AuthenticationPages/Login.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/AuthenticationPages/Signup.jsx';
import '../src/styles/globalStyles.css';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import AuthContextProvider from './store/authContext.jsx';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </React.StrictMode>,
);
