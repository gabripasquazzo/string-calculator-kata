'use strict';

const add = (numbers) =>{
  let sum = 0;
  if ( numbers === undefined || numbers === '' ) {
    return sum;
  }
  const values = numbers.split(/[,|\n]/);
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      sum += parseInt(values[index]);
    }
  }
  return sum;
};

exports.add = add;
