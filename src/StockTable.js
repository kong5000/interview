import React from 'react';

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
                            <tr key={date}>
                                {activeStocks.size > 0 && Array.from(activeStocks).length &&<td className="date">{date}</td>}
                                {Object.keys(prices).map(key => {
                                    if (activeStocks.has(key)) {
                                        return <td className="date">{prices[key][index]}</td>
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