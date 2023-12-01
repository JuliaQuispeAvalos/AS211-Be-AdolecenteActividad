import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesFormComponent } from './actividades-form.component';

describe('ActividadesFormComponent', () => {
  let component: ActividadesFormComponent;
  let fixture: ComponentFixture<ActividadesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesFormComponent]
    });
    fixture = TestBed.createComponent(ActividadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
