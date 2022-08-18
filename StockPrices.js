class StockPrices {
    constructor(data) {
        this.data = data
    }
    
    getPricesMultiple(tickers, startDate, endDate) {
        let dates = []
        this.data.forEach(element => {
            dates.push(element.date)
        });

        //Copy pasted this date sorting function from stack overflow, my sort function didnt work
        dates.sort(function (a, b) {
            var aa = a.split('/').reverse().join(),
                bb = b.split('/').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });
        
        if(startDate){
            dates = dates.filter((date) => new Date(date) > new Date(startDate))
        }
        if(endDate){
            dates = dates.filter((date) => new Date(date) < new Date(endDate) )
        }

        console.log(dates)
    }
}

const TEST_DATA = [{ MSFT: 36.38, AMZN: 19.98, date: "1/17/2014" }, { MSFT: 40.38, AMZN: 20.98, date: "1/10/2014" }, { MSFT: 40.38, AMZN: 20.98, date: "1/26/2014" }]

let a = new StockPrices(TEST_DATA)
a.getPricesMultiple(null, '1/10/2014', '1/26/2014')
