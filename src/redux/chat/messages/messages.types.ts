import { User } from '../../user/user.types'
import { Channel } from '../channels/channels.types';

export type StartMessage = {
  from: User,
  to: Channel,
  msg: string,
}

export type Message = StartMessage & {
  id: string,
}
