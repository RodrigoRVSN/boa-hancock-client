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
}

export default new UserService()
