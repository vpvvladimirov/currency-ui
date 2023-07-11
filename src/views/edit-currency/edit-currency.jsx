import './edit-currency.css';
import { testObject } from '../currency-details/currencyDetail';

const EditCurrency = () => {
  return (
    <div className="edit-currency-main">
      <div className="edit-currency-box">
        <div className="edit-currency-text">Edit Currency</div>
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
          <div className="save-btn-container">
            <button className="save-btn" type='button'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCurrency;