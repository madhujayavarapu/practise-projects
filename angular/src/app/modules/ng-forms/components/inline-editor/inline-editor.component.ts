import { EditModeDirective } from './../../directives/edit-mode.directive';
import { ViewModeDirective } from './../../directives/view-mode.directive';
import { Component, OnInit, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { switchMapTo, take, filter } from 'rxjs/operators';

@Component({
  selector: 'ng-inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrls: ['./inline-editor.component.scss']
})
export class InlineEditorComponent implements OnInit {

  @Output() update = new EventEmitter();
  @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
  @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;

  mode: 'view' | 'edit' = 'view';
  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  constructor(private host: ElementRef) { }

  ngOnInit() {
  }
 
  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl.tpl : this.editModeTpl.tpl;
  }

  private get element() {
    return this.host.nativeElement;
  }

  private viewModeHandler() { 
    fromEvent(this.element, 'dblclick').pipe(
    //  untilDest(this)
   ).subscribe(() => {
     this.mode = 'edit';
     this.editMode.next(true);
   });
  }

  private editModeHandler() {
    const clickOutside$ = fromEvent(document, 'click').pipe(
      filter(({ target }) => this.element.contains(target) === false),
      take(1)
    )
 
    this.editMode$.pipe(
      switchMapTo(clickOutside$),
      // untilDestroyed(this)
    ).subscribe(event => {
      this.update.next();
      this.mode = 'view';
    });
  }
}
