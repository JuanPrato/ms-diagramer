import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewInteractionComponent } from './over-view-interaction.component';

describe('OverViewInteractionComponent', () => {
  let component: OverViewInteractionComponent;
  let fixture: ComponentFixture<OverViewInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverViewInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
