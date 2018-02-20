// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in an object with two properties:

// weight: the weight of the cake in kilograms
// value: the monetary value of the cake in British shillings

// Reference: https://www.interviewcake.com/question/javascript/cake-thief

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// Weights and values may be any non-negative integer (so the integer can be 0).
// Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.



function maxDuffelBagValue(cakeTypes, capacity) {
    console.log('cakeTypes, capacity: ', cakeTypes, capacity);
    var maxValue = 0;
    var maxValueCake = {};
    var maxMonetaryValue = 0;
    var remainingCapacity = capacity;
    for (var i = 0; i < cakeTypes.length-1; i++) {
        var cake = cakeTypes[i]
        if (cake.value > maxValue) {
            maxValueCake = cakeTypes[i];
            maxValue = cakeTypes[i].value;
        }
    }
    remainingCapacity -=  Math.floor(remainingCapacity/maxValueCake.weight);
    maxMonetaryValue = remainingCapacity * maxValueCake.value;
    console.log('remainingCapacity: ', remainingCapacity);
    console.log('maxMonetaryValue: ', maxMonetaryValue);
}

var cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 }
  ];

  var capacity = 20;
maxDuffelBagValue(cakeTypes, capacity);

// returns 555 (6 of the middle type of cake and 1 of the last type of cake)
