import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { PROJ_CONSTANTS } from 'src/app/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  @Input('isToggled') isToggled: Boolean = false;

  private wowSubscription: Subscription;

  showChilds: Boolean = false;
  options: any[] = [];
  currentNav: string;

  constructor(private route: ActivatedRoute, private router:Router) {
    router.events.subscribe((e) => {
      if(e instanceof NavigationEnd) {
        let path = e.url.split('/');
        let currentNav = path.length > 0 ? path[1] : null;
        currentNav = currentNav == '' ? 'beginner' : currentNav;
        if(this.currentNav !== currentNav) {
          this.currentNav = currentNav;
          this.updateSubMenu();
        }
      }
    })
  }

  ngOnInit() {

  }

  toggleChilds() {
    this.showChilds = !this.showChilds;
  }

  updateSubMenu() {
    let subMenuOptionsForNav = PROJ_CONSTANTS.NAV_OPTIONS;
    if(!isNullOrUndefined(this.currentNav) && !isNullOrUndefined(subMenuOptionsForNav) && !isNullOrUndefined(subMenuOptionsForNav[this.currentNav])) {
        this.options = subMenuOptionsForNav[this.currentNav];
    }else {
      this.options = [];
    }
  }

}
