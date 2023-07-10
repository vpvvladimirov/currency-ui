import './exchange-transaction-buttons.css';

const ExchangeTransactionButtons = () => {
  return (
    <div className="buttons-container">
      <button className="new-transaction-btn" type="button">NEW TRANSACTION</button>
      <button className="exchange-rate-btn" type="button">EXCHANGE RATE</button>
    </div>
  );
};

export default ExchangeTransactionButtons;