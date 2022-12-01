import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import { cookies } from '@core/helpers/parseCookies'

class MatchesService {
  private httpClient: string

  constructor () {
    this.httpClient = 'http://localhost:4444'
  }

  async getMatches () {
    const accessToken = cookies.getValue(window.document, ACCESS_TOKEN)

    const response = await fetch(`${this.httpClient}/matches`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })

    return response.json()
  }
}

export default new MatchesService()
