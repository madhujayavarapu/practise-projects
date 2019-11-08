import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngViewMode]'
})
export class ViewModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
