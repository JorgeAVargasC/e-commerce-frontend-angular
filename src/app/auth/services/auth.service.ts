import { computed, inject, Injectable, signal } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {
  AuthStatusEnum,
  IAuthRepository,
  ILoginPayload,
  ILoginResponse,
  User
} from './domain'
import { catchError, map, Observable, tap, throwError } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient)
  private _cookiesService = inject(CookieService)

  private _currentUser = signal<User | null>(null)
  private _authStatus = signal<AuthStatusEnum>(AuthStatusEnum.checking)

  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  login(payload: ILoginPayload): Observable<boolean> {
    return this._http.post<ILoginResponse>('auth/login', payload).pipe(
      tap(({ user, token }) => {
        this._authStatus.set(AuthStatusEnum.authenticated)
        this._currentUser.set(user)
        this._cookiesService.set('token', token)
      }),
      map(() => true),
      catchError((e: HttpErrorResponse) => throwError(() => e.error.message))
    )
  }
}
