import './App.css';

// import CurrerncyDetails from './view/currencyDetails/currencyDetail';
import ExchangeCurrency from './view/exchangeCurrency/exchangeCurrency';
import CurrencyList from './views/currency-list/currency-list';
import CurrerncyDetails from './view/currencyDetails/currencyDetail';

const App = () => {
  return (
    <main>
      <ExchangeCurrency />
      <CurrencyList />
      <CurrerncyDetails />
    </main>
  );
};


export default App;

