import { IMatch, PersistenceMatch } from '@core/types/IMatch'

class MatchesMapper {
  toDomain (persistenceMatch: PersistenceMatch): IMatch {
    return {
      id: persistenceMatch.id,
      matchedAt: persistenceMatch.matched_at,
      matchedUser: persistenceMatch.matched_user,
      matchedUserId: persistenceMatch.matched_user_id,
      messages: persistenceMatch.messages,
      userId: persistenceMatch.user_id
    }
  }
}

export default new MatchesMapper()
