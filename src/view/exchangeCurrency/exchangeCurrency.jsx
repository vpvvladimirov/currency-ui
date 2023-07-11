import Header from '../../components/header/header';
import Layer1 from '../../images/Layer_1.png';
import './exchangeCurrency.css';

const ExchangeCurrency = () => {
  const options = ['USD', 'EUR', 'BGN'];

  const createCurrencyDropdown = () => {
    const result = [];
    for (let i = 0; i < options.length; i += 1) {
      result.push(<option key={i} value={options[i]}>{options[i]}</option>);
    }
    return result;
  }

  return (
    <>
      <Header />
      <div className="whiteBox">
        <h2 className="text">Exchange Currency</h2>
        <div className='container'>
          <div className='border'>
            <input className='inputStyle'
              type='text'
            />
            <div className='currency-menu-container'>
              <select id="dropdown" name='option'>
                {createCurrencyDropdown()}
              </select>
            </div>
          </div>

          <img src={Layer1} alt="Layer_1" />

          <div className='border'>
            <input className='inputStyle'
              type="text"
              readOnly
            />

            <div className='currency-menu-container'>
              <select id="dropdown" name='option'>
                {createCurrencyDropdown()}
              </select>
            </div>
          </div>
        </div>
       
            <button className='exchangeButton' type="button">Exchange</button>
        
        
      </div>
    </>
  );
}

export default ExchangeCurrency;
