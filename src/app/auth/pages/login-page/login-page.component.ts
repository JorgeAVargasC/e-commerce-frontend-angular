import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { PrimeNgModule } from '../../../shared/prime-ng'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  private fb = inject(FormBuilder)
  private authService = inject(AuthService)

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    if (this.loginForm.invalid) return

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
