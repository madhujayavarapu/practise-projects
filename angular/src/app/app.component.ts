import { ModalService } from './modules/modal/services/modal.service';
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

  constructor(private modalSrv: ModalService) {}

  toggleSidebar(val) {
    this.loadingSidebar = true;
    this.isSidebarToggled = !this.isSidebarToggled;

    setTimeout(() => {
      this.loadingSidebar = false;
    }, 500)
  }

  removeModal() {
    this.modalSrv.destroy();
  }
}
