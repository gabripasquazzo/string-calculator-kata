'use strict';
const {test, expect} = require('@jest/globals');
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

test('base input, newline: "2\n1"', () => {
  expect(kata.add('2\n1')).toBe(3);
});

test('three inputs, newline: "3\n2\n1"', () => {
  expect(kata.add('3\n2,1')).toBe(6);
});

test('three inputs, newline and comma: "3\n2,1"', () => {
  expect(kata.add('3\n2,1')).toBe(6);
});

test('four inputs, newlines and commas: "5\n6\n7,8"', () => {
  expect(kata.add('5\n6\n7,8')).toBe(26);
});

test('user defined delimiter: semicolon "//;\n1;2"', () => {
  expect(kata.add('//;\n1;2')).toBe(3);
});

test('user defined delimiter mixed with newline:  "//;\n1;2\n4"', () => {
  expect(kata.add('//;\n1;2\n4')).toBe(7);
});

test('delimiter of string "//;\nxyz" is ;', ()=>{
  expect(kata.__getDelimiter('//;\nxyz')).toBe(';');
});

test('delimiter of string "xyz" is default comma', ()=>{
  expect(kata.__getDelimiter('xyz')).toBe(',');
});

test('values of string "//;\n1;2;3" are 1,2,3', ()=>{
  expect(kata.__getValues('//;\n1;2;3')).toStrictEqual(['1', '2', '3']);
});

test('values of string "1,2,3" are 1,2,3', ()=>{
  expect(kata.__getValues('1,2,3')).toStrictEqual(['1', '2', '3']);
});

test('negatives not allowed', ()=>{
  expect(() => kata.add('1,-2')).toThrow('negatives not allowed: -2');
});

test('negatives not allowed, multiple negatives', ()=>{
  expect(() => kata.add('1,-2,-4')).toThrow('negatives not allowed: -2,-4');
});
