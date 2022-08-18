import React, { useState, useEffect } from 'react';
import StockTable from './StockTable';
import Checkbox from './CheckBox'
const TEST_DATE = ["1/17/2014", "1/21/2014", "1/22/2014"]
const TEST_PRICES = { "AAPL": [19.31, 19.61, 19.7], "MSFT": [36.38, null, 35.93] }

const StockPriceExplorer = ({ dates, prices }) => {
    const [stocksToDisplay, setStocksToDisplay] = useState(new Set())

    const updateStocksToDisplay = (stock, add) => {
        {Array.from(stocksToDisplay).map(val => {
            return console.log(`HELLO ${val}`)
        })}
        if(add){
            setStocksToDisplay(prev => new Set(prev.add(stock)))
        }else{
            setStocksToDisplay(prev => new Set([...prev].filter(x => x !== stock)))
        }
    }

    return (
        <div>
            <div>Stock Data</div>
            <div className='column-container'>
                <div className='left-column'>
                    {Object.keys(TEST_PRICES).map(name => {
                        return <div>
                            <Checkbox updateStocksToDisplay={updateStocksToDisplay} name={name}/>
                            {name}
                        </div>
                    })}
                </div>
                <div className='right-column'>
                    <StockTable prices={TEST_PRICES} dates={TEST_DATE} activeStocks={stocksToDisplay} />

                </div>
            </div>
        </div>
    );
};

export default StockPriceExplorer;