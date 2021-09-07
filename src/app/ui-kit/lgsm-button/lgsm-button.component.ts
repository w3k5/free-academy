import { Component, Input } from '@angular/core';

@Component({
  selector: 'lgsa-button',
  templateUrl: './lgsm-button.component.html',
  styleUrls: ['./lgsm-button.component.scss'],
})
export class LgsmButtonComponent {
  @Input() type: 'link' | 'button' = 'button';

  @Input() text: string = 'Lgsm Button';

  @Input() link: string = '404';
}
