import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('hide') hide: Boolean;
  @Output('toggleSidebar') toggleSidear = new EventEmitter<any>();
  isToggled: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebarEvent() {
    this.isToggled = !this.isToggled;
    this.toggleSidear.emit();
  }

}
