import HttpClient from '@services/HttpClient'

class MatchesService {
  private httpClient: typeof HttpClient

  constructor () {
    this.httpClient = HttpClient
  }

  getMatches () {
    return this.httpClient.get('/matches')
  }
}

export default new MatchesService()
