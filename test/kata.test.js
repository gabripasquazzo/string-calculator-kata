'use strict';
const kata = require('../src/kata');

test('empty input', () => {
  expect(kata.add('')).toBe(0);
});

test('one input: "1"', () => {
  expect(kata.add('1')).toBe(1);
});

test('base input: "2,1"', () => {
  expect(kata.add('2,1')).toBe(3);
});
