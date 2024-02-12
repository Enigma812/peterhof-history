import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandriaTourComponent } from './alexandriaTour.component';

describe('AlexandriaTourComponent', () => {
  let component: AlexandriaTourComponent;
  let fixture: ComponentFixture<AlexandriaTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AlexandriaTourComponent ]
    });
    fixture = TestBed.createComponent(AlexandriaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
