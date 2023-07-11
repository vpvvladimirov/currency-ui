import './App.css';
import NewTransaction from './views/new-transaction/new-transaction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrencyList from './views/currency-list/currency-list';
import CurrencyDetails from './views/currency-details/currencyDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CurrencyList />} />
        <Route path='/currency-info/USD' element={<CurrencyDetails />} />
        <Route path='/new-transaction' element={<NewTransaction />} />
      </Routes>
    </Router>
  );
};


export default App;

