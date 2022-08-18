import React from 'react';
import './StockTable.css'

const StockTable = ({ dates, prices, activeStocks }) => {
    return (
        <div>
            <table className="stock-table">
                <tbody>
                    <tr id="table-header">
                        {activeStocks.size > 0 && Array.from(activeStocks).length && <th className="info-header">Date</th>}
                        {Array.from(activeStocks).sort().map(key => <th className="info-header">{key}</th>)}
                    </tr>
                    {dates.map((date, index) => {
                        return (
                            <tr key={date} className='data-row'>
                                {activeStocks.size > 0 && Array.from(activeStocks).length &&<td className="data-cell date">{date}</td>}
                                {Object.keys(prices).map(key => {
                                    if (activeStocks.has(key)) {
                                        return <td className="data-cell">{prices[key][index]}</td>
                                    }
                                }
                                )}
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;