import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromhomeComponent } from './fromhome.component';

describe('FromhomeComponent', () => {
  let component: FromhomeComponent;
  let fixture: ComponentFixture<FromhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
