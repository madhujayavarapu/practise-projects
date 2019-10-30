import { Component } from '@angular/core';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSidebarToggled: Boolean = false;
  loadingSidebar: boolean = false;

  toggleSidebar(val) {
    this.loadingSidebar = true;
    this.isSidebarToggled = !this.isSidebarToggled;

    setTimeout(() => {
      this.loadingSidebar = false;
    }, 500)
  }
}
