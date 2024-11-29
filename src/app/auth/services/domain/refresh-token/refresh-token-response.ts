import { User } from '../interfaces'

export interface IRefreshTokenResponse {
  user: User
  token: string
}
