import './App.css';
import NewTransaction from './views/new-transaction/new-transaction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExchangeCurrency from './views/exchangeCurrency/exchangeCurrency';
import CurrencyList from './views/currency-list/currency-list';
import CurrencyDetails from './views/currency-details/currencyDetail';
import EditCurrency from './views/edit-currency/edit-currency';
import AddCurrency from './views/add-currency/add-currency';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CurrencyList />} />
        <Route path='/currency-info/:isoCode' element={<CurrencyDetails />} />
        <Route path='/new-transaction' element={<NewTransaction />} />
        <Route path='/edit-currency/:isoCode' element={<EditCurrency />} />
        <Route path='/add-currency' element={<AddCurrency />} />
      </Routes>
    </Router>
  );
};


export default App;