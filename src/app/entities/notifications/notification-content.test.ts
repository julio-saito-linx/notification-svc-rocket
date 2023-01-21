import { NotificationContent } from './notification-content'

describe('NotificationContent', () => {
  test('content is valid', () => {
    const content = new NotificationContent('12345')
    expect(content).toBeTruthy()
  })

  test('content is not valid - too short', () => {
    expect(() => new NotificationContent('1234')).toThrowError('content length')
  })

  test('content is not valid - too long', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrowError('content length')
  })
})
