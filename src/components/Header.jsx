import { useContext, useState } from 'react';
import { ModalButtonTrigger } from '../modal/Modal';
import '../styles/home.css';
import IconButton from './IconButton';
import { AuthContext } from '../store/AuthContex';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';

const Header = () => {
  const { userDetails, logout } = useContext(AuthContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown(() => !showDropDown);
  };
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="main_header">
      {/* <span className="profile_round">profile</span> */}
      <div className="user_profile">
        <IconButton icon="chevron-down" text={userDetails?.email} textColor="#000" hasText onClick={toggleDropDown} />
        <div className={`dropdown ${showDropDown ? 'show' : ''}`}>
          <ul>
            <Link
              to="/analysis"
              className="watch_video item"
              onClick={() => {
                setShowDropDown(false);
              }}
            >
              <li>Analysis</li>
            </Link>
            <a href="https://youtu.be/tXwXYvd0a68?si=9393vrSMG5K4Lq4M" target="_blank" className="watch_video item">
              <li>Watch Videos</li>
            </a>
            <li className="log-out item" onClick={handleLogout}>
              <IonIcon name="log-out-outline" color="red" />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <span>status: Newbie👶</span>
      </div>
      <ModalButtonTrigger id="addTask">
        <IconButton hasText={true} icon="add" text="Add Task" textColor="#fff" />
      </ModalButtonTrigger>
    </div>
  );
};
export default Header;
