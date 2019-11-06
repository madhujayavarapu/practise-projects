import { Component, ViewChild } from '@angular/core';
import { ToastContainerDirective } from 'ngx-toastr';
import { CommonService } from './modules/shared';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  isSidebarToggled: Boolean = true;
  loadingSidebar: boolean = false;

  toggleSidebar(val) {
    this.loadingSidebar = true;
    this.isSidebarToggled = !this.isSidebarToggled;

    setTimeout(() => {
      this.loadingSidebar = false;
    }, 500)
  }
}
