import HttpClient from '@services/HttpClient'
import MatchesMapper from '@services/MatchesService/mappers/MatchesMapper'

class MatchesService {
  private httpClient: typeof HttpClient

  constructor () {
    this.httpClient = HttpClient
  }

  async getMatches () {
    const matches = await this.httpClient.get('/matches')

    return matches.map(MatchesMapper.toDomain)
  }
}

export default new MatchesService()
