import { Component, computed, effect, inject } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { PrimeNG } from 'primeng/config'
import { AuthService, AuthStatusEnum } from './auth/services'
import { PrimeNgModule } from './shared/prime-ng'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule],
  providers: [CookieService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'e-commerce-frontend'

  private readonly _primeng = inject(PrimeNG)
  private readonly _authService = inject(AuthService)
  private readonly _router = inject(Router)

  public isCheckingAuth = computed<boolean>(() => {
    console.log(this._authService.authStatus())
    if (this._authService.authStatus() === AuthStatusEnum.checking) {
      return true
    }
    return false
  })

  public authStatusChangedEffect = effect(() => {
    const goToDashboard = () => {
      this._router.navigateByUrl('/dashboard')
    }

    const goToLogin = () => {
      this._router.navigateByUrl('/auth/login')
    }

    const actions = {
      [AuthStatusEnum.authenticated]: goToDashboard,
      [AuthStatusEnum.notAuthenticated]: goToLogin,
      [AuthStatusEnum.checking]: () => {}
    }

    actions[this._authService.authStatus()]()
  })

  ngOnInit() {
    this._primeng.ripple.set(true)
  }
}
