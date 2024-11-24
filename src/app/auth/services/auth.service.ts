import { computed, inject, Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  AuthStatusEnum,
  IAuthRepository,
  ILoginPayload,
  ILoginResponse,
  User
} from './domain'
import { tap } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService implements IAuthRepository {
  private _http = inject(HttpClient)

  private _currentUser = signal<User | null>(null)
  private _authStatus = signal<AuthStatusEnum>(AuthStatusEnum.checking)

  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  login(payload: ILoginPayload) {
    return this._http.post<ILoginResponse>('auth/login', payload).pipe(
      tap(({ user }) => {
        this._authStatus.set(AuthStatusEnum.authenticated)
        this._currentUser.set(user)
      })
    )
  }
}
