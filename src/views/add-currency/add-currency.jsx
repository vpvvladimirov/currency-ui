import './add-currency.css';
import Header from '../../components/header/header';
import { testObject } from '../currency-details/currencyDetail';

const AddCurrency = () => {
  return (
    <>
      <Header />
      <div className="add-currency-main">
        <div className="add-currency-box">
          <div className="add-currency-text">Add Currency</div>
          <div className="second-container">
            <div className="container">
              <div className="label">Name</div>
              <div className="field">
                <input type="text" defaultValue={testObject.name} />
              </div>
            </div>
            <div className="container">
              <div className="label">ISO Code</div>
              <div className="field">
                <input type="text" defaultValue={testObject.isoCode} />
              </div>
            </div>
            <div className="container">
              <div className="label">Surcharge Percent</div>
              <div className="field">
                <input type="text" defaultValue={testObject.surchargePerc} />
              </div>
            </div>
            <div className="add-btn-container">
              <button className="add-btn" type='button'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCurrency;