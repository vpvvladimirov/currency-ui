import alivolutLogo from '../../images/alivolut-logo 1.png';
import logoutIcon from '../../images/logout-icon.png';
import './header.css';
import { viravaDefault } from '../../config/authConfig';

const Header = () => {
  const logout = async () => {
    try {
      await viravaDefault.logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="alivolut-header">
      <div className="alivolut-logo-container">
        <img className="alivolut-logo" src={alivolutLogo} alt="Alivolut" />
      </div>
      <button className="logout-icon-btn" onClick={logout} type='button'>
        <img className='logout-icon' src={logoutIcon} alt="Log Out" />
      </button>
    </header>
  );
};

export default Header;