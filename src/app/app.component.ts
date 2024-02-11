import {Component, inject, NgZone} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ssr-500-bug';

  private ngZone = inject(NgZone);
  private httpClient = inject(HttpClient);

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      this.httpClient.get('http://localhost:55454/test123').subscribe();
    });
  }
}
