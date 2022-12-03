import { IMatch } from '@core/types/IMatch'
import { IMessage } from '@core/types/IMessage'
import HttpClient from '@services/HttpClient'
import MatchesMapper from '@services/MatchesService/mappers/MatchesMapper'

export interface IChatInfo {
  messages: IMessage[]
  match: IMatch
}

class MessagesService {
  private httpClient: typeof HttpClient

  constructor () {
    this.httpClient = HttpClient
  }

  async getMessagesByMatchId (matchId: string): Promise<IChatInfo> {
    const chatInfo = await this.httpClient.get(`/messages/${matchId}`)

    return { messages: chatInfo.messages, match: MatchesMapper.toDomain(chatInfo) }
  }
}

export default new MessagesService()
