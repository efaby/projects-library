import { TestBed } from '@angular/core/testing';

import { NgxProjectsService } from './ngx-projects.service';

describe('NgxProjectsService', () => {
  let service: NgxProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
