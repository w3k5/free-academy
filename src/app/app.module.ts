import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
