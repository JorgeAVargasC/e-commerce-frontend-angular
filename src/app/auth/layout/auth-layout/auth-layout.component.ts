import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module'

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule],
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {}
