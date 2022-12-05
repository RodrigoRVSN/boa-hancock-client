import { LIKE_OR_DISLIKE } from '@core/hooks/useFetchCard/useFetchCard.types'
import HttpClient from '@services/HttpClient'
import UsersMapper from '@services/UserService/mappers/UsersMapper'

class UserService {
  private httpClient: typeof HttpClient

  constructor () {
    this.httpClient = HttpClient
  }

  async getRandomUser () {
    const user = await this.httpClient.get('/user/')

    return UsersMapper.toDomain(user)
  }

  async likeOrDislikeUser (action: LIKE_OR_DISLIKE, toUserId: string) {
    const user = await this.httpClient.post('/likes/swipe', {
      is_liked: action === LIKE_OR_DISLIKE.LIKE,
      to_user_id: toUserId
    })

    return { ...UsersMapper.toDomain(user), isMatch: user.is_match, matchId: user.match_id }
  }
}

export default new UserService()
