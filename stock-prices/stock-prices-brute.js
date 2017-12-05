var stockPricesYesterdayArray = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPricesYesterday) {
    maxProfit = 0;
    stockPricesYesterday.forEach(function(outerElement, outerIndex) {
        stockPricesYesterday.forEach(function(innerElement, innerIndex) {
            var outerPrice = stockPricesYesterday[outerIndex] - stockPricesYesterday[innerIndex]
            maxProfit = Math.max(maxProfit, outerPrice)
        })
    });
    return maxProfit;
}


var price = getMaxProfit(stockPricesYesterdayArray);
console.log('price: ', price);
// returns 6 (buying for $5 and selling for $11)