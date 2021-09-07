import { Component, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import '@cds/core/icon/register';
import { ClarityIcons, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);
@Component({
  selector: 'lgsa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthPage = false;

  constructor(@Inject(Router) private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.isAuthPage = event.url === '/auth';
      }
    });
  }
}
