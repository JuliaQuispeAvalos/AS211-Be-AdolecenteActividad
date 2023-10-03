import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescenteModalComponent } from './adolescente-modal.component';

describe('AdolescenteModalComponent', () => {
  let component: AdolescenteModalComponent;
  let fixture: ComponentFixture<AdolescenteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdolescenteModalComponent]
    });
    fixture = TestBed.createComponent(AdolescenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
