import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClarityModule, ClrIconModule } from '@clr/angular';

import type { NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { MonacoEditorModule } from 'ngx-monaco-editor';

// **********************
// Components
// **********************
import { HeaderComponent } from './header/header.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

const COMPONENTS = [HeaderComponent, CodeEditorComponent];

const monacoConfig: NgxMonacoEditorConfig = {
  // baseUrl: 'app-name/assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => {}, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ClarityModule,
    ClrIconModule,
    RouterModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
