import { IUser, PersistenceUser } from '@core/types/IUser'

class UsersMapper {
  toDomain (persistenceMatch: PersistenceUser): IUser {
    return {
      ...persistenceMatch,
      avatarUrl: persistenceMatch.avatar_url,
      reposUrl: persistenceMatch.repos_url,
      twitterUsername: persistenceMatch.twitter_username,
      createdAt: persistenceMatch.created_at,
      updatedAt: persistenceMatch.updated_at
    }
  }
}

export default new UsersMapper()
