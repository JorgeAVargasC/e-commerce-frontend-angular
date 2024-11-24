import { Observable } from 'rxjs'

import { ILoginPayload } from './login/login-payload'
import { ILoginResponse } from './login/login-response'

export interface IAuthRepository {
  login(payload: ILoginPayload): Observable<ILoginResponse>
}
