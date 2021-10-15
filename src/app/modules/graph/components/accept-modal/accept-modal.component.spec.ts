import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptModal } from './accept-modal.component';

describe('AddStepFormComponent', () => {
  let component: AcceptModal;
  let fixture: ComponentFixture<AcceptModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
