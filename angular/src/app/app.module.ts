import { AddEventComponent } from './modules/beginner/modules/count-down-timer/components/add-event/add-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
 
import { LayoutModule } from './modules/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent
  ],
  entryComponents: [
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
