import { computed, inject, Injectable, signal } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {
  AuthStatusEnum,
  ILoginPayload,
  ILoginResponse,
  IRefreshTokenResponse,
  User
} from './domain'
import { catchError, map, Observable, tap, throwError } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _http = inject(HttpClient)
  private readonly _cookiesService = inject(CookieService)

  private readonly _currentUser = signal<User | null>(null)
  private readonly _authStatus = signal<AuthStatusEnum>(AuthStatusEnum.checking)

  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())

  constructor() {
    setTimeout(() => {
      this.refreshToken().subscribe()
    }, 5000)
  }

  private readonly _setAuth = (user: User, token: string) => {
    this._authStatus.set(AuthStatusEnum.authenticated)
    this._currentUser.set(user)
    this._cookiesService.set('token', token)
  }

  private readonly _catchError = (e: HttpErrorResponse) => {
    this._authStatus.set(AuthStatusEnum.notAuthenticated)
    return throwError(() => e.error.message)
  }

  login(payload: ILoginPayload): Observable<boolean> {
    return this._http.post<ILoginResponse>('auth/login', payload).pipe(
      tap(({ user, token }) => this._setAuth(user, token)),
      map(() => true),
      catchError((e: HttpErrorResponse) => this._catchError(e))
    )
  }

  refreshToken(): Observable<boolean> {
    return this._http.get<IRefreshTokenResponse>('auth/refresh-token').pipe(
      tap(({ user, token }) => this._setAuth(user, token)),
      map(() => true),
      catchError((e: HttpErrorResponse) => this._catchError(e))
    )
  }
}
