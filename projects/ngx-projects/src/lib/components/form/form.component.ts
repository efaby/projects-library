import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Project} from './../../shared/app.type';

import {ProjectsService} from './../../services/projects.service';
import {PROJECT_TITLE, PROJECT_COMPLETED} from './../../shared/app.keys';
import {EventService} from '@labshare/ngx-core-services';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form = new FormGroup({});
  public model: Project;
  public fields: FormlyFieldConfig[];
  public load: boolean;
  constructor(private projectService: ProjectsService, private eventService: EventService) { 
    this.fields = [
      {
        id: 'title',
        key: PROJECT_TITLE.prop,
        type: PROJECT_TITLE.type,
        templateOptions: {
          label: PROJECT_TITLE.label,
          disabled: true
        }
      },
      {
        id: 'completed',
        key: PROJECT_COMPLETED.prop,
        type: PROJECT_COMPLETED.type,
        templateOptions: {
          label: PROJECT_COMPLETED.label,
          disabled: true
        }
      }
    ];
    this.model = {
      id: 1,
      userId: 1,
      title: 'delectus aut autem',
      completed: true
    };
  }

  ngOnInit(): void {
    this.eventService.get('project:selectedProject').subscribe(prj => {
      this.load = true;
      this.model = prj;
    });
  }

  toggleDisabled() {
    this.form.disabled ? this.form.enable() : this.form.disable();
  }

  public enableForm() {
    this.form.enable();
  }

  public submit() {
    this.projectService.updateProject(this.model.id, this.model).subscribe(
      r => {},
      err => {}
    );
  }
}
