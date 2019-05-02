import { User } from '../../user/user.types'

export type StartMessage = {
  from: User,
  to: User,
  msg: string,
}

export type Message = {
  from: User,
  to: User,
  id: string,
  msg: string,
}
