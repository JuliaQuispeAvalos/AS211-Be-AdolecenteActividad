import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesFormIIComponent } from './actividades-form-ii.component';

describe('ActividadesFormIIComponent', () => {
  let component: ActividadesFormIIComponent;
  let fixture: ComponentFixture<ActividadesFormIIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesFormIIComponent]
    });
    fixture = TestBed.createComponent(ActividadesFormIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
