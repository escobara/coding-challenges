var stockPricesYesterdayArray = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPricesYesterday) {
    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }
    // we'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0]

    for(var i = 1 ; i < stockPricesYesterday.length; i++) {
        // current price in loop
        var currentPrice = stockPricesYesterday[i];

        var potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit)
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}


var price = getMaxProfit(stockPricesYesterdayArray);
console.log('price: ', price);


// returns 6 (buying for $5 and selling for $11)