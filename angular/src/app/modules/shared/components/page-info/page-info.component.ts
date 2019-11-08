import { Component, OnInit, Input } from '@angular/core';
import { PROJ_CONSTANTS } from 'src/app/constants';

@Component({
  selector: 'ng-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {

  @Input('title') title: string;
  @Input('demoLink') demoLink: string[];
  @Input('docLink') docLink: string[];
  @Input('demoLinkMatch') demoLinkMatch: boolean = true;
  @Input('docLinkMatch') docLinkMatch: boolean = true;

  routes = PROJ_CONSTANTS.ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
