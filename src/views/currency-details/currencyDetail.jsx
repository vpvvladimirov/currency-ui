import CurrerncyDetailComponent from '../../components/currency-detail-component/currencyDetailComponent';
import './currencyDetail.css';

export const testObject = {
  isoCode: ['USD', 'BGN', 'EUR', 'JPY', 'RUB'],
  symbol: ['$', 'Lv.', '€', '¥', '₽'],
  name: ['USA Dollar', 'Bulgarian Lev', 'Euro', 'Japanese Yen', 'Russian Ruble'],
  surchargePerc: ['2', '3', '1', '5', '4'],
  surchargeAmount: ['20', '16', '34', '46', '8'],
  balance: ['400', '500', '600', '700', '800'],
  exchangeEnabled: [true, false, true, true, false],

};

const CurrencyDetails = () => {
  return (
    <div className='currency-detail-container'>
      <h1 className="currencyDetailsText">Currency Details</h1>
      <CurrerncyDetailComponent title="Name" value={testObject.name[0]} />
      <CurrerncyDetailComponent title="ISO Code" value={testObject.isoCode[0]} />
      <CurrerncyDetailComponent title="Surcharge Percentage" value={`${testObject.surchargePerc[0]}%`} />
      <CurrerncyDetailComponent title="Surcharge Amount" value={testObject.surchargeAmount[0]} />
      <CurrerncyDetailComponent title="Balance" value={`${testObject.balance[0]}${testObject.symbol[0]}`} />
      <CurrerncyDetailComponent
        title='Exchange Enabled'
        value={testObject.exchangeEnabled[0] ? 'Yes' : 'No'}
      />
    </div>
  );
};

export default CurrencyDetails;