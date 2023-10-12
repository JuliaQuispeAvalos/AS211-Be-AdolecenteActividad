import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActividadesComponent } from './home-actividades.component';

describe('HomeTeenagerComponent', () => {
  let component: HomeActividadesComponent;
  let fixture: ComponentFixture<HomeActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeActividadesComponent]
    });
    fixture = TestBed.createComponent(HomeActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
