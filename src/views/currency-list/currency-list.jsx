import './currency-list.css';
import CurrencyPanel from '../../components/currency-panel/currency-panel';
import CurrencyListBar from '../../components/currency-list-bar/currency-list-bar';
import Header from '../../components/header/header';
import ExchangeTransactionButtons from '../../components/exchange-transaction-buttons/exchange-transaction-buttons';

const CurrencyList = () => {
  const testCurrencyName = {
    isoCode: 'American Dollar (USD)'
  };

  return (
    <>
      <Header />
      <div>
        <ExchangeTransactionButtons />
        <div className="currency-list-main">
          <CurrencyListBar />
          <div className="currency-list">
            <CurrencyPanel name={testCurrencyName.isoCode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyList;