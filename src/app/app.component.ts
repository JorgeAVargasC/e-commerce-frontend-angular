import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PrimeNG } from 'primeng/config'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce-frontend'

  private readonly primeng = inject(PrimeNG)

  ngOnInit() {
    this.primeng.ripple.set(true)
  }
}
