import './currency-list-bar.css';
import { useState } from 'react';

const CurrencyListBar = () => {
  const [exchangeableButton, exchangeableButtonClicked] = useState({ exchangeable: false });

  const handleClick = () => {
    exchangeableButtonClicked({ exchangeable: !exchangeableButton.exchangeable });
  };

  return (
    <div className="currency-list-bar">
      <div className="currency-name-info">Currency</div>
      <button className="exchangeable-currency-btn" type="button" onClick={handleClick}
        style={{
          backgroundColor: exchangeableButton.exchangeable ? 'rgb(53, 112, 100)' : 'white',
          color: exchangeableButton.exchangeable ? 'white' : 'rgba(72, 172, 152, 1)'
        }}>EXCHANGEABLE</button>
      <button className="add-currency-btn" type="button">ADD</button>
    </div>
  );
};

export default CurrencyListBar;