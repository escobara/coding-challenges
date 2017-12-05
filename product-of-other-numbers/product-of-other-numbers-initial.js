
var example =  [1, 7, 3, 4];
// function getProductsOfAllIntsExceptAtIndex(array) {
//     //   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
//     var results = [];
//     var products = [];
//     array.forEach(function(outerElement, outerIndex) {
//         array.forEach(function(innerElement, innerIndex) {
//             if (outerIndex != innerIndex) {
//                 console.log('Skip this element', outerElement, innerElement);
//                 console.log('Skip this index', outerIndex, innerIndex);
//                 results[outerIndex] = innerElement;
//             }
//         })
//     });

//     console.log(products);
//     return results;
// }

function getProductsOfAllIntsExceptAtIndex(intArray) {

        if (intArray.length < 2) {
            throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
        }

        var productsOfAllIntsExceptAtIndex = [];

        // for each integer, we find the product of all the integers
        // before it, storing the total product so far each time
        var productSoFar = 1;
        for (var i = 0; i < intArray.length; i++) {
            productsOfAllIntsExceptAtIndex[i] = productSoFar;
            productSoFar *= intArray[i];
        }

        // for each integer, we find the product of all the integers
        // after it. since each index in products already has the
        // product of all the integers before it, now we're storing
        // the total product of all other integers
        productSoFar = 1;
        for (var j = intArray.length - 1; j >= 0; j--) {
            console.log('j: ', j, productsOfAllIntsExceptAtIndex[j]);
            productsOfAllIntsExceptAtIndex[j] *= productSoFar;
            productSoFar *= intArray[j];
            console.log('productSoFar: ', productSoFar);
        }

        return productsOfAllIntsExceptAtIndex;
    }

// A brute force approach would use two loops to multiply the integer at every index by the integer at every nestedIndex, unless index == nestedIndex.
var products = getProductsOfAllIntsExceptAtIndex(example); //   [84, 12, 28, 21]
console.log('products: ', products);
