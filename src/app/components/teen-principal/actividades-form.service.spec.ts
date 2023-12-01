import { TestBed } from '@angular/core/testing';

import { ActividadesFormService } from './actividades-form.service';

describe('ActividadesFormService', () => {
  let service: ActividadesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
