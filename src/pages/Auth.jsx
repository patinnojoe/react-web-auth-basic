// import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import { Login, Register } from '../components';
import { TabButton, TabContent } from '../components/Tab';

function Auth() {
  const tabs = [
    {
      name: <p>Login</p>,
      content: <Login />,
    },

    {
      name: <p>register</p>,
      content: <Register />,
    },
  ];

  return (
    <main className="auth_container">
      <section className="auth_container-section">
        <aside className="auth_container-action">
          <div className="auth_container-action-image">
            <div className="auth-nav">
              <TabButton tabs={tabs} />
            </div>
          </div>
        </aside>
        <aside className="auth_container-details">
          <TabContent tabs={tabs} />
        </aside>
      </section>
    </main>
  );
}

export default Auth;
