import { IUser } from '../types/IUser'

export const UserMock: IUser = {
  id: '123',
  login: 'rodrigorvsn',
  avatarUrl: '/rodrigo.png',
  reposUrl: 'github.com/rodrigorvsn',
  name: 'Rodrigo RVSN',
  company: 'rodricompany',
  blog: 'string',
  location: 'string',
  email: 'string',
  hireable: true,
  bio: 'string',
  twitterUsername: 'string',
  createdAt: new Date(),
  updatedAt: new Date()
}
