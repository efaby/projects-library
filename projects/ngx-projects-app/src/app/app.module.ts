import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxProjectsModule } from 'ngx-projects';
import {NgxProjectsComponent} from '../../../ngx-projects/src/lib/ngx-projects.component';
import { LayoutModule } from '@labshare/ngx-base-components';

@NgModule({
  declarations: [
    AppComponent,
    NgxProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProjectsModule,
    LayoutModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
