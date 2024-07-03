import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Auth } from './pages';
import { GuestRoute } from './components';
import ProtectedRoutes from './components/ProtectedRoutes';
import './styles/index.css';
import TabContextProvider from './store/TabContext';
import AuthContextProvider from './store/AuthContex';

function App() {
  return (
    <AuthContextProvider>
      <TabContextProvider>
        <BrowserRouter>
          <Routes>
            {/* Guest routes */}
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Auth />} />
            </Route>

            {/* protected routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TabContextProvider>
    </AuthContextProvider>
  );
}

export default App;
