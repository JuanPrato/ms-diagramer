import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGraphFormComponent } from './add-graph-form.component';

describe('AddGraphFormComponent', () => {
  let component: AddGraphFormComponent;
  let fixture: ComponentFixture<AddGraphFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGraphFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
