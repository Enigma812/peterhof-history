import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandriaComponent } from './alexandria.component';

describe('AlexandriaComponent', () => {
  let component: AlexandriaComponent;
  let fixture: ComponentFixture<AlexandriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AlexandriaComponent ]
    });
    fixture = TestBed.createComponent(AlexandriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
