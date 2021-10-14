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

test('three inputs: "3,2,1"', () => {
  expect(kata.add('3,2,1')).toBe(6);
});

test('four inputs: "5,6,7,8"', () => {
  expect(kata.add('5,6,7,8')).toBe(26);
});
