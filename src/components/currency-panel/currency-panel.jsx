import './currency-panel.css';
import EditCurrencyIcon from '../../images/edit-currency-icon.png';
import InfoCurrencyIcon from '../../images/info-currency-icon.png';

const CurrencyPanel = ({ name }) => {
  return (
    <div className="currency-info">
      <div className="currency-name">{name}</div>
      <div className="edit-info-currency-container">
        <button className="edit-currency-btn" type="button">
          <img className="edit-currency-icon" src={EditCurrencyIcon} alt="Edit" />
        </button>
        <button className="info-currency-btn" type="button">
          <img className="info-currency-icon" src={InfoCurrencyIcon} alt="Info" />
        </button>
      </div>
    </div>
  );
};

export default CurrencyPanel;