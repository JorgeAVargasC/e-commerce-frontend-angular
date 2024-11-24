import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthService } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {

  private readonly _authService = inject(AuthService)

  public user = computed(() => this._authService.currentUser())




}
