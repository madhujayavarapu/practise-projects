import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngEditMode]'
})
export class EditModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
