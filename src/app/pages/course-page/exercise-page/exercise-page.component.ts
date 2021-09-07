import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import type { AfterViewInit, ElementRef } from '@angular/core';
import { CodeEditorService } from '@services/code.service';
import type { ExerciseInterface } from '@interfaces';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LanguageType } from '@enums';

@Component({
  selector: 'lgsa-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss'],
})
export class ExercisePageComponent implements AfterViewInit {
  constructor(
    @Inject(CodeEditorService) private codeEditorService: CodeEditorService,
    @Inject(Renderer2) private renderer: Renderer2,
  ) {}

  languageEnum = LanguageType;

  exerciseObservable: Observable<ExerciseInterface> = of({
    title: 'Моё первое задание',
    id: '7173b07f-a6f7-49a6-84b4-e54b907697b0',
    authorId: 0,
    ratio: 4,
    html: '<div class="my-first-exercise">Lorem ipsu dolor sit amet</div>',
    css: '.my-first-exercise { color: red; font-size: 30px}',
    js: 'console.log("exercise")',
    test: '',
    goals: [
      {
        goal: 'Напишите любой код',
        test: '',
      },
      {
        goal: 'Удалите любой код',
        test: '',
      },
    ],
    technologies: ['html', 'css'],
  });

  isSidebarOpen = true;

  @ViewChild('codeResult') iframeRef: ElementRef | undefined;

  handleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngAfterViewInit(): void {
    if (this.iframeRef) {
      const iframe = this.iframeRef.nativeElement as HTMLIFrameElement;
      this.codeEditorService.setIframe(iframe);
    }
  }
}
