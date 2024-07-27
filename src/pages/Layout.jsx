import PropTypes from 'prop-types';
import { Header } from '../components';

function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="app-main">{children}</section>
    </>
  );
}

export default Layout;
Layout.propTypes = {
  children: PropTypes.node,
};
