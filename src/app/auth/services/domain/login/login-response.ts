export interface ILoginResponse {
  user: User
  token: string
}

export interface User {
  id: string
  email: string
  fullName: string
}
