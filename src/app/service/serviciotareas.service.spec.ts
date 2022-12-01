import { TestBed } from '@angular/core/testing';

import { ServiciotareasService } from './serviciotareas.service';

describe('ServiciotareasService', () => {
  let service: ServiciotareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciotareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
