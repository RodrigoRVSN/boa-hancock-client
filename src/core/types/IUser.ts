export interface PersistenceUser {
  id: string;
  login: string;
  avatar_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  id: string;
  login: string;
  avatarUrl: string;
  reposUrl: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitterUsername: string;
  createdAt: Date;
  updatedAt: Date;
  isMatch?: boolean;
  matchId?: string;
}
