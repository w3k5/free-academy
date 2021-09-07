import { ViewContainerRef, Inject, TemplateRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngVar]',
})
export class VarDirective {
  @Input()
  set ngVar(context: unknown) {
    this.context.$implicit = this.context.ngVar = context;

    if (!this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }

  private context: {
    $implicit: unknown;
    ngVar: unknown;
  } = {
    $implicit: null,
    ngVar: null,
  };

  private hasView: boolean = false;

  constructor(
    @Inject(TemplateRef) private templateRef: TemplateRef<any>,
    @Inject(ViewContainerRef) private vcRef: ViewContainerRef,
  ) {}
}
