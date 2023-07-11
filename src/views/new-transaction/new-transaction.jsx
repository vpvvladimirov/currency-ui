import './new-transaction.css';
import { useState } from 'react';
import Header from '../../components/header/header';
import { testObject } from '../currency-details/currencyDetail';

const NewTransaction = () => {

  const [withdrawalButton, withdrawalButtonClicked] = useState({ withdrawal: true });

  const handleWithdrawalClick = () => {
    withdrawalButtonClicked({ withdrawal: !withdrawalButton.withdrawal });
  };

  const [depositButton, depositButtonClicked] = useState({ deposit: false });

  const handleDepositClick = () => {
    depositButtonClicked({ deposit: !depositButton.deposit });
  };

  return (
    <>
      <Header />
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
              <button className="withdrawal-btn" type='button' onClick={handleWithdrawalClick}
                style={{
                  backgroundColor: withdrawalButton.withdrawal ? 'rgb(53, 112, 100)' : 'white',
                  color: withdrawalButton.withdrawal ? 'white' : 'rgba(72, 172, 152, 1)',
                  border: withdrawalButton.withdrawal ? '2px solid var(--primary-color, white)' : '2px solid var(--primary-color, #48AC98)'
                }}> Withdrawal</button>
              <button className="deposit-btn" type='button' onClick={handleDepositClick}
                style={{
                  backgroundColor: depositButton.deposit ? 'rgb(53, 112, 100)' : 'white',
                  color: depositButton.deposit ? 'white' : 'rgba(72, 172, 152, 1)',
                  border: depositButton.deposit ? '2px solid var(--primary-color, white)' : '2px solid var(--primary-color, #48AC98)'
                }}>Deposit</button>
            </div>
            <div className="create-transaction-btn">CREATE</div>
          </div>
        </div>
      </div >
    </>
  );
};

export default NewTransaction;