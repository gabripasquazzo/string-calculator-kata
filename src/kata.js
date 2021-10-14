'use strict'

const add = (numbers) =>{
    if ( numbers === undefined || numbers === "" )
        return 0;
    if ( numbers.indexOf(',') > 0 ) {
        let values = numbers.split(',');
        return parseInt(values[0])+parseInt(values[1]);
    }
    return parseInt(numbers);
}

exports.add = add;
