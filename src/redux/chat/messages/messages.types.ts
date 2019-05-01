import { User } from '../../user/user.types'

export type Message = {
  from: User,
  to: User,
  id: string,
  msg: string,
}
