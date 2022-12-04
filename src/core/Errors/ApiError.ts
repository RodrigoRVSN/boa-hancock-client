interface IBody extends Body {
  error: string;
}

export default class APIError extends Error {
  message: string
  body: unknown
  response: unknown
  name: string
  stack?: string | undefined
  cause?: Error | undefined

  constructor (response: Response, body: IBody) {
    super()

    this.name = 'APIError'
    this.response = response
    this.body = body
    this.message = body?.error || `${response.status} - ${response.statusText}`
  }
}
