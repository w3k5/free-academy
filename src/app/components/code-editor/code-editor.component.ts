import type { OnDestroy } from '@angular/core';
import { Input, Inject, Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CodeEditorService } from '@services/code.service';
import type { ExerciseInterface, IEditorMinimapOptions } from '@interfaces';
import { LanguageType } from '@enums';

interface MonacoEditorOptions {
  theme: string;
  language?: string;
  minimap: IEditorMinimapOptions;
}

@Component({
  selector: 'lgsa-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnDestroy {
  @Input() exercise: ExerciseInterface;

  @Input() editorType: LanguageType;

  constructor(@Inject(CodeEditorService) private codeEditorService: CodeEditorService) {}

  editorOptions: MonacoEditorOptions = {
    theme: 'vs',
    language: 'javascript',
    minimap: {
      enabled: false,
      showSlider: 'mouseover',
    },
  };

  type: string = 'javascript';

  private autosaveInterval = interval(1000);

  private subs = new Subscription();

  code: string = ``;

  onChange(data: string): void {
    this.codeEditorService.setCode(data, this.editorType);
  }

  onInit(editor: any) {
    if (!this.exercise) throw new Error("Exercise wasn't inited!");
    this.subs.add(
      this.autosaveInterval.subscribe(() => {
        if (this.code) {
          this.codeEditorService.autosave({ code: this.code, type: this.editorType, exerciseId: this.exercise.id });
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
