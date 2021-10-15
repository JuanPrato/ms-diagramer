import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphStepComponent } from './graph-step.component';

describe('GraphStepComponent', () => {
  let component: GraphStepComponent;
  let fixture: ComponentFixture<GraphStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
