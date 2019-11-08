import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditorComponent } from './components/inline-editor/inline-editor.component';
import { EditModeDirective } from './directives/edit-mode.directive';
import { ViewModeDirective } from './directives/view-mode.directive';
import { FileInputComponent } from './components/file-input/file-input.component';
import { NG_VALIDATORS } from '@angular/forms';
import { requiredFileType } from './validators/requiredFileType';

@NgModule({
  declarations: [InlineEditorComponent, EditModeDirective, ViewModeDirective, FileInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileInputComponent
  ]
})
export class NgFormsModule { }
