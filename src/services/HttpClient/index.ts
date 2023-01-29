import { ACCESS_TOKEN } from '@core/constants/cookiesConstants'
import APIError from '@core/Errors/ApiError'
import { cookies } from '@core/helpers/parseCookies'

class HttpClient {
  private baseURL: string
  private accessToken: string

  constructor () {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4444'
    this.accessToken = cookies.getValue(ACCESS_TOKEN)!
  }

  async get (requestUrl: string) {
    const response = await fetch(`${this.baseURL}${requestUrl}`, {
      headers: { Authorization: `Bearer ${this.accessToken}` }
    })

    if (response.ok) {
      return response.json()
    }

    throw new APIError(response, await response.json())
  }

  async post (requestUrl: string, body: unknown) {
    const response = await fetch(`${this.baseURL}${requestUrl}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })

    if (response.ok) {
      return response.json()
    }

    throw new APIError(response, await response.json())
  }
}

export default new HttpClient()
