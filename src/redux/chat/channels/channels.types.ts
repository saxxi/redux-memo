import { User } from '../../user/user.types'

export type UserGroup = {
  id: string
  fullname: string
}

export type Channel = User | UserGroup
