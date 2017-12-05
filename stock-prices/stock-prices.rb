stocks = [10, 7, 5, 8, 11, 9];

def getMaxProfit(stockPricesYesterday)
    min_price = stockPricesYesterday[0]
    # We know you can't short
    max_profit = stockPricesYesterday[1] - stockPricesYesterday[0]
    stockPricesYesterday.each do |outer_element, outer_index|
        potential_profit = outer_element - min_price
        min_price = min(outer_element, min_price)
        max_profit = max(max_profit, potential_profit)
    end
    return max_profit
end

def max(x, y)
    return x > y ? x : y
end

def min(x, y)
    return x < y ? x : y
end

price =  getMaxProfit(stocks)

puts price

# returns 6 (buying for $5 and selling for $11)