export class NotificationContent {
  private readonly content: string

  get value() {
    return this.content
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240
  }

  constructor(content: string) {
    if (!this.validateContentLength(content)) {
      throw new Error(`content length (${content?.length}) must be valid`)
    }
    this.content = content
  }
}
