import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject, interval, of } from 'rxjs';
import { scan, debounce } from 'rxjs/operators';
import { LocalStorageService } from '@services/localStorage.service';
import type { AutosaveInterface } from '@interfaces';
import { LanguageType } from '@enums';

@Injectable({ providedIn: 'root' })
export class CodeEditorService {
  constructor(@Inject(LocalStorageService) private localStorageService: LocalStorageService) {}

  iframeSubject = new BehaviorSubject<undefined | HTMLIFrameElement>(undefined);

  code = new Subject();

  isScriptCreated: boolean = false;

  script: HTMLScriptElement | undefined;

  createScript(ifr: HTMLIFrameElement, code: string): HTMLScriptElement {
    ifr.contentDocument!.querySelector('script')?.remove();
    const script = ifr.contentDocument!.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.innerHTML = `try {${code}} catch (e) {}`;
    const iframeBody = ifr.contentDocument!.querySelector('body');
    iframeBody!.append(script);
    this.isScriptCreated = true;
    return script;
  }

  setCode(data: string, type: LanguageType): void {
    this.code.next(data);
    const iframe = this.iframeSubject.value;

    switch (type) {
      case LanguageType.html:
        if (iframe) {
          iframe.contentWindow!.document.body.innerHTML = data;
        }
        break;
      case LanguageType.javascript:
        if (iframe && iframe.contentDocument) {
          this.script = this.createScript(iframe, data);
        }
        break;
      default:
        break;
    }
  }

  setIframe(iframe: HTMLIFrameElement): void {
    this.iframeSubject.next(iframe);
  }

  autosave(options: AutosaveInterface): void {
    const storageData = this.localStorageService.getItem(options.exerciseId);
    if (storageData) {
      if (JSON.stringify(options) !== storageData) {
        this.localStorageService.setItem(options.exerciseId, JSON.stringify(options));
      }
    }
  }
}
