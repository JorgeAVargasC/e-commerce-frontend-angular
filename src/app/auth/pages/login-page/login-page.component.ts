import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { PrimeNgModule } from '../../../shared/prime-ng'
import { AuthService } from '../../services/auth.service'
import { MessageService } from 'primeng/api'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  private readonly _fb = inject(FormBuilder)
  private readonly _authService = inject(AuthService)
  private readonly _messageService = inject(MessageService)
  private readonly _router = inject(Router)

  public loginForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    if (this.loginForm.invalid) return

    this._authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this._router.navigate(['/dashboard'])

        this._messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Success Login'
        })
      },
      error: (err) => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err
        })
      }
    })
  }
}
