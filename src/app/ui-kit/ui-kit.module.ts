import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LgsmButtonComponent } from './lgsm-button/lgsm-button.component';

const components = [LgsmButtonComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class UiKitModule {}
