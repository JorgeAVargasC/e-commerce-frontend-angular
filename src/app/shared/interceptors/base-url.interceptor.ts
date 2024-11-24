import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from '../../../environments/environment.development'

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url
  const baseUrl = environment.apiBaseUrl
  return next(
    req.clone({
      url: `${baseUrl}/${url}`
    })
  )
}
