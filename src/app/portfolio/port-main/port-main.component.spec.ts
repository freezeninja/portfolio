import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortMainComponent } from './port-main.component';

describe('PortMainComponent', () => {
  let component: PortMainComponent;
  let fixture: ComponentFixture<PortMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
