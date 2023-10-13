import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenagerFormComponent } from './teenager-form.component';

describe('TeenagerFormComponent', () => {
  let component: TeenagerFormComponent;
  let fixture: ComponentFixture<TeenagerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeenagerFormComponent]
    });
    fixture = TestBed.createComponent(TeenagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
