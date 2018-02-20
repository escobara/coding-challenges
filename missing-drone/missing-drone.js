


var findMissing = function(delivery_ids) {
    var missing = 0;
    for (let index = 0; index < delivery_ids.length; index++) {
        const elementI = delivery_ids[index];
        for (let k = 0; k < delivery_ids.length; k++) {
            missing++;
            const elementk = delivery_ids[index];
            console.log('element: ', elementI);
            console.log('elementk', elementk)

        }
    }
    return delivery_ids;
}

var delivery_id_confirmations = [6, 8, 4, 5, 2, 2, 8, 5, 7, 6];
var delivery_id_confirmations_short = [6, 8];

var missing = findMissing(delivery_id_confirmations_short)
console.log('missing: ', missing);

