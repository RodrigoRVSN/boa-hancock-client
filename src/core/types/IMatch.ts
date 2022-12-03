import { IMessage } from '@core/types/IMessage'
import { IUser } from '@core/types/IUser'

export interface PersistenceMatch {
  id: string
  matched_at: string
  matched_user: IUser
  matched_user_id: string
  messages: string[]
  user_id: string
}

export interface IMatch {
  id: string
  matchedAt: string
  matchedUser: IUser
  matchedUserId: string
  messages: IMessage[]
  userId: string
}
