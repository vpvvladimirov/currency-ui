
import CurrerncyDetailComponent from "../../components/currency-detail-component/currencyDetailComponent";
import './currencyDetails.css';
import Header from './header';

const CurrencyDetails = () => {
  const testObject = {
    isoCode: 'USD',
    symbol: '$',
    name: 'USA Dollar',
    surchargePerc: '2',
    surchargeAmount: '266',
    balance: '340',
    exchangeEnabled: true,
    
  };

  return (
    <>
      <Header />

      <div className='whiteBox'>
        <h1 className="currencyDetailsText">Currency Details</h1>
        <CurrerncyDetailComponent title='Name' value={testObject.name} />
        <CurrerncyDetailComponent title='ISO Code' value={testObject.isoCode} />
        <CurrerncyDetailComponent title='Surcharge Percentage' value={`${testObject.surchargePerc}%`} />
        <CurrerncyDetailComponent title='Surcharge Amount' value={testObject.surchargeAmount} />
        <CurrerncyDetailComponent title='Balance' value={`${testObject.balance}${testObject.symbol}`} />
        <CurrerncyDetailComponent
          title='Exchange Enabled'
          value={testObject.exchangeEnabled ? 'Yes' : 'No'}
        />
      </div>
    </>
  );
};

export default CurrencyDetails;
