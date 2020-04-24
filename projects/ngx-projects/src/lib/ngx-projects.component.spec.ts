import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProjectsComponent } from './ngx-projects.component';

describe('NgxProjectsComponent', () => {
  let component: NgxProjectsComponent;
  let fixture: ComponentFixture<NgxProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
