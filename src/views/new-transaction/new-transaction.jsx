import './new-transaction.css';
import { useState } from 'react';
import { testObject } from '../currency-details/currencyDetail';

const NewTransaction = () => {

  const [withdrawalButton, setWithdrawalButton] = useState(true);
  const [depositButton, setDepositButton] = useState(false);

  const handleWithdrawalClick = () => {
    setWithdrawalButton(true);
    setDepositButton(false);
  };

  const handleDepositClick = () => {
    setWithdrawalButton(false);
    setDepositButton(true);
  };

  return (
    <div className="transaction-main">
      <div className="transaction-box">
        <div className="create-new-transaction-text">Create New Transaction</div>
        <div className="second-container">
          <div className="currency-transaction-container">
            <div className="amount-container">
              <input type="text" placeholder="Amount" />
            </div>
            <div className="dropdown-container">
              <select>
                <option value={testObject.isoCode}>{testObject.isoCode}</option>
              </select>
            </div>
          </div>
          <div className="withdrawal-deposit-container">
            <button
              className="withdrawal-btn"
              type='button'
              onClick={handleWithdrawalClick}
              style={{
                backgroundColor: withdrawalButton ? 'rgb(53, 112, 100)' : 'white',
                color: withdrawalButton ? 'white' : 'rgba(72, 172, 152, 1)',
                border: withdrawalButton ? '2px solid var(--primary-color, white)' : '2px solid var(--primary-color, #48AC98)',
                pointerEvents: withdrawalButton ? 'none' : 'auto'
              }}
            >
              Withdrawal
            </button>
            <button
              className="deposit-btn"
              type='button'
              onClick={handleDepositClick}
              style={{
                backgroundColor: depositButton ? 'rgb(53, 112, 100)' : 'white',
                color: depositButton ? 'white' : 'rgba(72, 172, 152, 1)',
                border: depositButton ? '2px solid var(--primary-color, white)' : '2px solid var(--primary-color, #48AC98)',
                pointerEvents: depositButton ? 'none' : 'auto'
              }}
            >
              Deposit
            </button>
          </div>
          <div className="create-transaction-btn">CREATE</div>
        </div>
      </div>
    </div>
  );
};

export default NewTransaction;