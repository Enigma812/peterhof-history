import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseComponent } from './choise.component';

describe('ChoiseComponent', () => {
  let component: ChoiseComponent;
  let fixture: ComponentFixture<ChoiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiseComponent ]
    });
    fixture = TestBed.createComponent(ChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
