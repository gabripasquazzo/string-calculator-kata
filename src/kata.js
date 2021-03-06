'use strict';

const MAX_VALUE = 1000;

const add = (numbers) =>{
  let sum = 0;
  if ( numbers === undefined || numbers === '' ) {
    return sum;
  }
  const values = getValues(numbers);
  validateValues(values);
  sum = values.reduce((prev, curr)=>prev+curr);
  return sum;
};


const getValues = (inputString) => {
  const delimiter = getDelimiter(inputString);
  const delimitingRegExp = new RegExp('['+delimiter+'|\n]');
  let values = inputString.split(delimitingRegExp);
  values = values.filter((v) => v !== '' && v !=='//');
  values = values.map((value) => parseInt(value));
  return values.filter((number) => number <= MAX_VALUE);
};

const validateValues = (values) => {
  let valid = true;
  const negatives = [];
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      if (values[index]<0) {
        valid = false;
        negatives.push(values[index]);
      }
    }
  }
  if (!valid) {
    throw (new Error('negatives not allowed: '+negatives.join()));
  }
};

const getDelimiter = (inputString) =>{
  let delimiter = ',';
  if (inputString !== undefined && inputString.startsWith('//')) {
    const parts = inputString.split('\n');
    const dirtyDelimiter = parts[0];
    delimiter = dirtyDelimiter.replace(/^\/\/+/, '');
  }
  return delimiter;
};

exports.add = add;
exports.__getDelimiter = getDelimiter;
exports.__getValues = getValues;
