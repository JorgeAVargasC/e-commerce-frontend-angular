import { inject } from '@angular/core'
import { type CanActivateFn, Router } from '@angular/router'

import { AuthService } from '../../auth/services/auth.service'
import { AuthStatusEnum } from '../../auth/services/domain'

export const PublicRoutesGuard: CanActivateFn = (childRoute, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.authStatus() === AuthStatusEnum.authenticated) {
    router.navigateByUrl('/dashboard')
    return false
  }

  return true
}
