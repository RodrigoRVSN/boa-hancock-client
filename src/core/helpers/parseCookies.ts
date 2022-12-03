import { IncomingHttpHeaders, ServerResponse } from 'http'

const getValue = (cookieName: string, local?: Document | IncomingHttpHeaders) => {
  const requestSide = local || window.document

  return requestSide.cookie?.split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))?.split('=')[1]
}

const destroyCookie = (local: ServerResponse, cookieName: string) => {
  local.setHeader('Set-Cookie', `${cookieName}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`)
}

export const cookies = { getValue, destroyCookie }
