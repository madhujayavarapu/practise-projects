import { LayoutRoutingModule } from './layout-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, HeaderComponent, SidebarMenuComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarMenuComponent
  ]
})
export class LayoutModule { }
