import './App.css';
import StockPriceExplorer
 from './StockPriceExplorer';
const TEST_DATE = ["1/17/2014", "1/21/2014", "1/22/2014"]
const TEST_PRICES = { "AAPL": [19.31, 19.61, 19.7], "MSFT": [36.38, null, 35.93] }

function App() {
  return (
    <div className="App">
      <StockPriceExplorer dates={TEST_DATE} prices={TEST_PRICES}/>
    </div>
  );
}

export default App;
