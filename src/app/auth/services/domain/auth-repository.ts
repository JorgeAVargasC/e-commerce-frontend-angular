import { Observable } from 'rxjs'
import { ILoginResponse } from './login/login-response'
import { ILoginPayload } from './login/login-payload'

export interface IAuthRepository {
  login(payload: ILoginPayload): Observable<ILoginResponse>
}
