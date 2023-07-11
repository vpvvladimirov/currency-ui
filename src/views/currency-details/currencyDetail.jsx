import CurrerncyDetailComponent from '../../components/currency-detail-component/currencyDetailComponent';
import './currencyDetail.css';

export const testObject = {
  isoCode: 'USD',
  symbol: '$',
  name: 'USA Dollar',
  surchargePerc: '2',
  surchargeAmount: '266',
  balance: '340',
  exchangeEnabled: true,

};

const CurrencyDetails = () => {
  return (
    <div className='currency-detail-container'>
      <h1 className="currencyDetailsText">Currency Details</h1>
      <CurrerncyDetailComponent title="Name" value={testObject.name} />
      <CurrerncyDetailComponent title="ISO Code" value={testObject.isoCode} />
      <CurrerncyDetailComponent title="Surcharge Percentage" value={`${testObject.surchargePerc}%`} />
      <CurrerncyDetailComponent title="Surcharge Amount" value={testObject.surchargeAmount} />
      <CurrerncyDetailComponent title="Balance" value={`${testObject.balance}${testObject.symbol}`} />
      <CurrerncyDetailComponent
        title='Exchange Enabled'
        value={testObject.exchangeEnabled ? 'Yes' : 'No'}
      />
    </div>
  );
};

export default CurrencyDetails;