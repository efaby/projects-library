import { NgModule } from '@angular/core';
import { NgxProjectsComponent } from './ngx-projects.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {FormlyModule} from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from  '@angular/common';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import {GridsterModule} from 'angular-gridster2';
import {EventService} from '@labshare/ngx-core-services';

@NgModule({
  declarations: [NgxProjectsComponent, ProjectsComponent, FormComponent, GridComponent],
  imports: [
    GridsterModule,
    FormlyBootstrapModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    InfiniteScrollModule, 
    FormlyModule.forRoot(), 
    HttpClientModule
  ],
  exports: [NgxProjectsComponent, GridComponent]
})
export class NgxProjectsModule {
  constructor(private eventService: EventService) {
  }
 }
