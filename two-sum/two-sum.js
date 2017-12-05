// Two Sum
// From LeetCoder
// Given an array of integers, find two numbers such that they add up to a specific
// target number.
// The function twoSum should return indices of the two numbers such that they add
// up to the target, where index1 must be less than index2. Please note that your
// returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution.
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

var examples = [2, 7, 11, 15];
var targeted = 9

function bruteTwoSum(inputs, target) {
    if (inputs.length < 2) {
        throw Error('Must have at least two elements in the array')
    }
    var results = [];
    for (var outer = 0; outer < inputs.length; outer++) {
        for (var inner = 0; inner < inputs.length; inner++) {
            if (inputs[outer] + inputs[inner] === target) {
                results = [inner, outer]
            }
        }
    }
    return results;
}

function twoSum(inputs, target) {
    if (inputs.length < 2) {
        throw Error('Must have at least two elements in the array')
    }
    var saved = {},
        result = [];

    for (i = 0; i < inputs.length; i++) {
        var val = inputs[i];
        if (saved.hasOwnProperty(val)) {
            console.log('saved: ', saved);
            result[0] = saved[val] + 1
            result[1] = i + 1;
            return result
        }
        saved[target - inputs[i]] = i
    }
    return results;
}

// var results = twoSum(examples, targeted)
// var results = bruteTwoSum(examples, 26)
var results = twoSum(examples, 26)
console.log(results);