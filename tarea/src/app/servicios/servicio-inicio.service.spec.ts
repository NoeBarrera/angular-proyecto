import { TestBed } from '@angular/core/testing';

import { ServicioInicioService } from './servicio-inicio.service';

describe('ServicioInicioService', () => {
  let service: ServicioInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
