import { IncomingHttpHeaders } from 'http'

export const getCookies = (local: Document | IncomingHttpHeaders) => {
  return local.cookie?.split('; ')
    .find((row) => row.startsWith('@bh_access_token='))?.split('=')[1]
}
