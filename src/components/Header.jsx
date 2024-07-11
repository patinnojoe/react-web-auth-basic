import { ModalButtonTrigger } from '../modal/Modal';
import '../styles/home.css';
import IconButton from './IconButton';

const Header = () => {
  return (
    // <div className="app_header">
    //   <span>Header</span>
    //   <IconButton hasText={true} icon="log-out" text="Log out" textColor="#000" />
    // </div>

    <div className="main_header">
      <span>profile</span>
      <ModalButtonTrigger id="addTask">
        <IconButton hasText={true} icon="add" text="Add Task" textColor="#fff" />
      </ModalButtonTrigger>
    </div>
  );
};
export default Header;
