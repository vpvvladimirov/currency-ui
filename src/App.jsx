import './App.css';
import alivolutLogo from './images/alivolut-logo 1.png';
import logoutIcon from './images/logout-icon.png';

const App = () => {
  return (
    <>
      <header className="alivolut-header">
        <img className="alivolut-logo" src={alivolutLogo} alt="Alivolut" />
        <img className="logout-icon" src={logoutIcon} alt="Log Out" />
      </header>
      <main>
        main
      </main>
    </>
  );
};

export default App;