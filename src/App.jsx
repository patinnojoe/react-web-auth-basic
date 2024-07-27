import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Auth, Analysis } from './pages';
import { GuestRoute } from './components';
import ProtectedRoutes from './components/ProtectedRoutes';
import './styles/index.css';
import TabContextProvider from './store/TabContext';
import AuthContextProvider from './store/AuthContex';
import { ModalProvider } from './store/ModalProvider';

function App() {
  return (
    <AuthContextProvider>
      <ModalProvider>
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
                <Route path="/analysis" element={<Analysis />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TabContextProvider>
      </ModalProvider>
    </AuthContextProvider>
  );
}

export default App;
