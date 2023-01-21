import { Replace } from '../../../helpers/Replace'
import { NotificationContent } from './notification-content'

interface NotificationProps {
  recepient_id: string
  content: NotificationContent
  category: string
  read_at?: Date | null
  created_at: Date
}

export class Notification {
  private props: NotificationProps

  constructor(props: Replace<NotificationProps, { created_at?: Date }>) {
    this.props = {
      ...props,
      created_at: props.created_at || new Date(),
    }
  }

  public set recepient_id(value: string) {
    this.props.recepient_id = value
  }
  public get recepient_id() {
    return this.props.recepient_id
  }

  public set content(value: NotificationContent) {
    this.props.content = value
  }
  public get content() {
    return this.props.content
  }

  public set category(value: string) {
    this.props.category = value
  }
  public get category() {
    return this.props.category
  }

  public set read_at(value: Date | null | undefined) {
    this.props.read_at = value
  }
  public get read_at() {
    return this.props.read_at
  }

  public get created_at() {
    return this.props.created_at
  }
}
