import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandriaChoiceComponent } from './alexandriaChoice.component';

describe('ChoiseComponent', () => {
  let component: AlexandriaChoiceComponent;
  let fixture: ComponentFixture<AlexandriaChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexandriaChoiceComponent ]
    });
    fixture = TestBed.createComponent(AlexandriaChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
