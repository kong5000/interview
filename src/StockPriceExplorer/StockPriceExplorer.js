import React, { useState } from 'react';
import StockTable from '../StockTable/StockTable';
import Checkbox from '../LabeledCheckbox/CheckBox'
import './StockPriceExplorer.css'

const StockPriceExplorer = ({ dates, prices }) => {
    const [stocksToDisplay, setStocksToDisplay] = useState(new Set())

    const updateStocksToDisplay = (stock, add) => {
        // Sets are not immutable, new Set has to be made or state will not be updated
        if(add){
            setStocksToDisplay(prev => new Set(prev.add(stock)))
        }else{
            setStocksToDisplay(prev => new Set([...prev].filter(x => x !== stock)))
        }
    }

    return (
        <div className='stock-price-explorer'>
            <h3>Stock Data</h3>
            <div className='column-container'>
                <div className='left-column'>
                    {Object.keys(prices).map(name => {
                        return <div>
                            <Checkbox updateStocksToDisplay={updateStocksToDisplay} name={name}/>
                        </div>
                    })}
                </div>
                <div className='right-column'>
                    <StockTable prices={prices} dates={dates} activeStocks={stocksToDisplay} />
                </div>
            </div>
        </div>
    );
};

export default StockPriceExplorer;