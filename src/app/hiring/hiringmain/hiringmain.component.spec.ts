import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringmainComponent } from './hiringmain.component';

describe('HiringmainComponent', () => {
  let component: HiringmainComponent;
  let fixture: ComponentFixture<HiringmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
