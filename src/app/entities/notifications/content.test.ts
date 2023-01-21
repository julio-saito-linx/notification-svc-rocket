import { Content } from './content';

test('content is valid', () => {
  const content = new Content('12345');
  expect(content).toBeTruthy();
});

test('content is not valid - too short', () => {
  expect(() => new Content('1234')).toThrowError('content length');
});

test('content is not valid - too long', () => {
  expect(() => new Content('a'.repeat(241))).toThrowError('content length');
});
