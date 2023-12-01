import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionalModalComponent } from './transaccional-modal.component';

describe('TransaccionalModalComponent', () => {
  let component: TransaccionalModalComponent;
  let fixture: ComponentFixture<TransaccionalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionalModalComponent]
    });
    fixture = TestBed.createComponent(TransaccionalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
