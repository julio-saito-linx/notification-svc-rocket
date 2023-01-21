import { Notification } from './notification'
import { NotificationContent } from './notification-content'

describe('Notification', () => {
  test('notification can be created', () => {
    const content = new Notification({
      category: 'category',
      content: new NotificationContent('12345'),
      recepient_id: 'example-recepient_id',
    })
    expect(content).toBeTruthy()
  })
})
