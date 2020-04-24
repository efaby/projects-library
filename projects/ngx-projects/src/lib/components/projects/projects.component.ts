import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './../../services/projects.service';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {Project} from './../../shared/app.type';
import {EventService} from '@labshare/ngx-core-services';

@Component({
  selector: 'lib-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public todos: any[] = [];
  private hasItems = true;
  private actualPage: number;
  public form = new FormGroup({});
  public model = {};
  private option = null;
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = [
    {
      key: 'user',
      type: 'select',
      templateOptions: {
        label: 'Users',
        required: true,
        labelProp: 'name',
        valueProp: 'id',
        options: [],
        change: (field, $event) => {
          const options = $event.target.value.split(':');
          this.todos = [];
          this.actualPage = 1;
          this.option = parseInt(options[1], 10);
          this.getTodos(this.option);
        }
      }
    }
  ];

  constructor(
    private projectsService: ProjectsService, 
    private eventService: EventService
    ) {
    this.actualPage = 1;
    this.hasItems = true;
  }

  ngOnInit() {
    this.getUsers();
    this.getTodos(this.option);
  }
  getUsers(): void {
    this.projectsService.getUsers().subscribe(users => {
      this.fields[0].templateOptions.options = users.map(value => {
        return {
          id: value.id,
          name: value.name
        };
      });
    });
  }
  getTodos(userId: number): void {
    this.projectsService.getTodos(this.actualPage, userId).subscribe(todos => {
      if (todos.length) {
        this.todos.push(...todos);
      } else {
        this.hasItems = false;
      }
    });
  }

  onScroll() {
    if (this.hasItems) {
      this.actualPage++;
      this.getTodos(this.option);
    }
  }

  onSelectProject(item: Project) {
    this.eventService.get('project:selectedProject').next(item);
  }

}
