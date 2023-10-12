import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesModalComponent } from './actividades-modal.component';

describe('AdolescenteModalComponent', () => {
  let component: ActividadesModalComponent;
  let fixture: ComponentFixture<ActividadesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesModalComponent]
    });
    fixture = TestBed.createComponent(ActividadesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
