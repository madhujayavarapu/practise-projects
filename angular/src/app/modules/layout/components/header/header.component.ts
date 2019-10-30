import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('toggleSidebar') toggleSidebar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebarEvent() {
    this.toggleSidebar.emit();
  }

}
