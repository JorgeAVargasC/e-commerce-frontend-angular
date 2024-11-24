import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { PrimeNG } from 'primeng/config'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [CookieService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'e-commerce-frontend'

  private readonly primeng = inject(PrimeNG)

  ngOnInit() {
    this.primeng.ripple.set(true)
  }
}
