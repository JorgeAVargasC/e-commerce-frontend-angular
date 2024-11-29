import { inject } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'

import { AuthService } from '../../auth/services/auth.service'
import { AuthStatusEnum } from '../../auth/services/domain'

export const PrivateRoutesGuard: CanActivateFn = (childRoute, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.authStatus() === AuthStatusEnum.authenticated) {
    return true
  }

  router.navigateByUrl('/auth')
  return false
}
