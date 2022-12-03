import { IMessage } from '@core/types/IMessage'
import { IUser, PersistenceUser } from '@core/types/IUser'

export interface PersistenceMatch {
  id: string
  matched_at: string
  matched_user: PersistenceUser
  matched_user_id: string
  messages: IMessage[]
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
