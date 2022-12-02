import { IUser } from '@core/types/IUser'

export interface IMatch {
  id: string
  matched_at: string
  matched_user: IUser
  matched_user_id: string
  messages: string[]
  user_id: string
}
