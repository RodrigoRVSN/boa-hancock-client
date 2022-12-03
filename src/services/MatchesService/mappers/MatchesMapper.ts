import { IMatch, PersistenceMatch } from '@core/types/IMatch'

class MatchesMapper {
  toDomain (persistenceMatch: PersistenceMatch): IMatch {
    return {
      id: persistenceMatch.id,
      matchedAt: persistenceMatch.matched_at,
      matchedUser: {
        ...persistenceMatch.matched_user,
        avatarUrl: persistenceMatch.matched_user.avatar_url,
        reposUrl: persistenceMatch.matched_user.repos_url,
        twitterUsername: persistenceMatch.matched_user.twitter_username,
        createdAt: persistenceMatch.matched_user.created_at,
        updatedAt: persistenceMatch.matched_user.updated_at
      },
      matchedUserId: persistenceMatch.matched_user_id,
      messages: persistenceMatch.messages,
      userId: persistenceMatch.user_id
    }
  }
}

export default new MatchesMapper()
