import { TestBed } from '@angular/core/testing';

import { ServicioHechizosService } from './servicio-hechizos.service';

describe('ServicioHechizosService', () => {
  let service: ServicioHechizosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHechizosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
