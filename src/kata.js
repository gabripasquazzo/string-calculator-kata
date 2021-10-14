'use strict';

const add = (numbers) =>{
  let sum = 0;
  if ( numbers === undefined || numbers === '' ) {
    return sum;
  }
  const values = getValues(numbers);
  validateValues(values);
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      sum += parseInt(values[index]);
    }
  }
  return sum;
};


const getValues = (inputString) => {
  const delimiter = getDelimiter(inputString);
  const delimitingRegExp = new RegExp('['+delimiter+'|\n]');
  const values = inputString.split(delimitingRegExp);
  return clean(values);
};

const validateValues = (values) => {
  let valid = true;
  const negatives = [];
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      if (parseInt(values[index])<0) {
        valid = false;
        negatives.push(parseInt(values[index]));
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

const clean = (values) => {
  const cleanedValues = [];
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      if (values[index] !== '' && values[index] !== '//') {
        cleanedValues.push(values[index]);
      }
    }
  }
  return cleanedValues;
};


exports.add = add;
exports.__getDelimiter = getDelimiter;
exports.__getValues = getValues;
