import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../../models/requirement';

@Component({
  selector: 'ng-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.scss']
})
export class ReqListComponent implements OnInit {

  @Input('title') title: string;
  @Input('req') req: Requirement;
  @Input('checkboxes') checkboxes: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
