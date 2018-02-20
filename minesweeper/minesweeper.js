// 0  0  0  0  0
// 0  0  0  0  0
// 1  1  1  0  0
// 1  9  1  0  0
// 1  2  2  1  0
// 0  1  9  1  0
// 0  1  1  1  0

//  Each square contains either a mine (indicated by a value of 9), or an empty square.
//  Empty squares can have counts from zero (no adjacent mines) up to 8 (all adjacent squares are mines).


// Gameplay starts with a user un-hiding a square at random. If the square contains a mine, the game ends.
// If it is a blank, the number of adjacent mines is revealed.
var matrix = [
    ['B', '1', 'E', '1', 'B'],
    ['B', '1', 'M', '1', 'B'],
    ['B', '1', '1', '1', 'B'],
    ['B', 'B', 'B', 'B', 'B']
]

console.log(matrix[0][2])