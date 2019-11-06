import { CommonService } from './../../../../../shared/services/common.service';
import { isNullOrUndefined, isArray } from 'util';
import { EventEmitter, SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input('label') label: string;
  @Input('options') options: Array<Object> = [];
  @Input('bindKey') bindKey: string;
  @Input('displayName') displayName: string; 
  @Input('class') class: string;
  @Output('modelChange') modelChange = new EventEmitter<any>();

  modelVal: any;

  @Input('model')
  get model() {
    return this.modelVal;
  }

  set model(val: any) {
    this.modelVal = val;
    this.modelChange.emit(this.modelVal);
  }

  constructor(
    private commonSrv:CommonService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!isNullOrUndefined(changes) && !isNullOrUndefined(changes.options) && !isNullOrUndefined(changes.options.currentValue)) {
      let opts = changes.options.currentValue;
      if(typeof opts == 'object' && isArray(opts)) {
        this.options = opts;
      }else if(typeof opts == 'object' && !isArray(opts)) {
        this.options = this.commonSrv.convertObjectToArray(opts);
        this.displayName = isNullOrUndefined(this.displayName) ? 'value' : this.displayName;
        this.bindKey = isNullOrUndefined(this.bindKey) ? 'key' : this.bindKey;
      }else {
        console.error("Not a valid Options");
      }
    }
  }

}
