import { IncomingHttpHeaders } from 'http'

export const getValue = (local: Document | IncomingHttpHeaders, name: string) => {
  return local.cookie?.split('; ')
    .find((row) => row.startsWith(`${name}=`))?.split('=')[1]
}

export const destroyCookie = (local: Document | IncomingHttpHeaders, name: string) => {
  local.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export const cookies = { getValue, destroyCookie }
