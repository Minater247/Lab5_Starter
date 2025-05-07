// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Unit tests for isPhoneNumber

test('isPhoneNumber: \'559-385-6523\' is a phone number', () => {
  expect(isPhoneNumber('559-385-6523')).toBe(true);
});

test('isPhoneNumber: \'999-999-9999\' is a phone number', () => {
  expect(isPhoneNumber('999-999-9999')).toBe(true);
});

test('isPhoneNumber: \'che-ese-brgr\' is not a phone number', () => {
  expect(isPhoneNumber('che-ese-brgr')).toBe(false);
});

test('isPhoneNumber: \'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\' is not a phone number', () => {
  expect(isPhoneNumber('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

// Unit tests for isEmail

test('isEmail: \'jj27@ucsd.edu\' is an email', () => {
  expect(isEmail('jj27@ucsd.edu')).toBe(true);
});

test('isEmail: \'nreed132@gmail.com\' is an email', () => {
  expect(isEmail('nreed132@gmail.com')).toBe(true);
});

test('isEmail: \'559-385-6523\' is not an email', () => {
  expect(isEmail('559-385-6523')).toBe(false);
});

test('isEmail: \'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\' is not an email', () => {
  expect(isEmail('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

// Unit tests for isStrongPassword

test('isStrongPassword: \'password\' is a strong password', () => {
  expect(isStrongPassword('password')).toBe(true);
});

test('isStrongPassword: \'meme\' is a strong password', () => {
  expect(isStrongPassword('meme')).toBe(true);
});

test('isStrongPassword: \'w0t\' is not a strong password', () => {
  expect(isStrongPassword('w0t')).toBe(false);
});

test('isStrongPassword: \'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\' is not a strong password', () => {
  expect(isStrongPassword('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

// Unit tests for isDate

test('isDate: \'12/08/1987\' is a date', () => {
  expect(isDate('12/08/1987')).toBe(true);
});

test('isDate: \'12/06/2004\' is a date', () => {
  expect(isDate('12/06/2004')).toBe(true);
});

test('isDate: \'559-385-6523\' is not a date', () => {
  expect(isDate('559-385-6523')).toBe(false);
});

test('isDate: \'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\' is not a date', () => {
  expect(isDate('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

// Unit tests for isHexColor

test('isHexColor: \'#ff2800\' is a hex color', () => {
  expect(isHexColor('#ff2800')).toBe(true);
});

test('isHexColor: \'000\' is a hex color', () => {
  expect(isHexColor('000')).toBe(true);
});

test('isHexColor: \'0000\' is not a hex color', () => {
  expect(isHexColor('0000')).toBe(false);
});

test('isHexColor: \'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\' is not a hex color', () => {
  expect(isHexColor('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});