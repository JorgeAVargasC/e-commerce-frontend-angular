import { CookieService } from 'ngx-cookie-service'

import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _cookiesService = inject(CookieService)
  const token = _cookiesService.get('token')

  const tokenReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })

  return next(tokenReq)
}
